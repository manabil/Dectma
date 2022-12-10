import React, { useState, useRef, useEffect } from 'react';
import { ImageCard } from '../components/ImageCard';
import { DescCard } from '../components/DescCard';
import { diseases } from '../data/diseases';
import * as tf from '@tensorflow/tfjs';
const roboflow = window.roboflow;

export const Classify = () => {
  const [progress, setProgress] = useState('idle');
  const [imgPreview, setImgPreview] = useState();
  const [predict, setPredict] = useState([]);
  const [webcam, setWebcam] = useState(false);
  const [loadWebcam, setLoadWebcam] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  let model = null;

  const preProcess = (image) => {
    const imgNormalized = tf.tidy(() => {
      const imgTensor = tf.browser.fromPixels(image);
      const normalized = tf.scalar(1.0).sub(imgTensor.div(tf.scalar(255.0)));
      const batchDims = normalized.expandDims(0);
      const resized = tf.image.resizeBilinear(batchDims, [224, 224]);
      return resized;
    });
    return imgNormalized;
  };

  const classify = async () => {
    try {
      setProgress('process');
      const model = await tf.loadLayersModel('model/model.json');

      const img = document.getElementById('img');
      const imgNormalized = preProcess(img);

      const predictions = tf.tidy(() => {
        const output = model.predict(imgNormalized);
        const predictions = Array.from(tf.argMax(output, 1).dataSync());
        const confidents = Math.round(output.max().arraySync() * 10000) / 100;
        return [predictions[0], confidents];
      });

      setProgress('finish');
      setPredict(predictions);
    } catch (error) {
      console.error(error);
      setProgress((e) => (e = 'error'));
    }
  };

  const handleInput = (e) => {
    const urlPreview = URL.createObjectURL(e.target.files[0]);
    setImgPreview(urlPreview);
  };

  const getDetection = async () => {
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      try {
        const predictions = await model.detect(video);
        setPredict(
          predictions.map((disease) => {
            return [
              diseases.forEach((dss) =>
                dss.slug === disease.class ? dss.id : ''
              ),
              disease.confidence,
            ];
          })
        );
        const ctx = canvasRef.current.getContext('2d');
        renderDetection(predictions, ctx);
      } catch (error) {
        console.error(error);
        setProgress((e) => (e = 'error'));
        setLoadWebcam(false);
      }
    }
  };

  const loadModel = async () => {
    setLoadWebcam(true);
    const getAuth = await roboflow.auth({
      publishable_key: 'rf_IFsWxkQvH2fVforkhmsTrQExKzB2',
    });
    const loadModel = await getAuth.load({
      model: 'tomato-leaf-diseases',
      version: 1,
    });
    model = loadModel;
    setLoadWebcam((e) => (e = !e));
  };

  const runDetection = async () => {
    loadModel();
    setInterval(() => {
      getDetection();
    }, 50);
  };

  const renderDetection = (detections, ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    const x = 0;
    const y = 0;

    detections.forEach((prediction) => {
      const width = prediction.bbox.width;
      const height = prediction.bbox.height;

      ctx.strokeStyle = prediction.color;
      ctx.font = '18px Arial';
      ctx.lineWidth = 4;

      ctx.beginPath();
      ctx.fillStyle = prediction.color;
      ctx.fillText(prediction.class, x, y);
      ctx.rect(x, y, width, height);
      ctx.stroke();
    });
  };

  useEffect(() => {
    webcam && runDetection();
  }, [webcam]);

  return (
    <div>
      <div className="relative grid grid-cols-1 justify-center justify-items-center gap-5 p-4">
        <div className="absolute top-60 bottom-0 -z-10 w-full bg-[#f0e9d2]"></div>
        <ImageCard
          handleInput={handleInput}
          imgPreview={imgPreview}
          handleClick={classify}
          progressState={progress}
          useWebcam={webcam}
          handleWebcam={() => setWebcam(!webcam)}
          webcamRef={webcamRef}
          canvasRef={canvasRef}
          loadWebcam={loadWebcam}
        />
        <DescCard progressState={progress} result={predict} />
      </div>
    </div>
  );
};
