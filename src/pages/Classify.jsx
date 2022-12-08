import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { ImageCard } from '../components/ImageCard';
import { DescCard } from '../components/DescCard';
import * as tf from '@tensorflow/tfjs';
import { diseases } from '../data/diseases';

export const Classify = () => {
  const [inProgress, setInProgress] = useState('Your Prediction Goes Here');
  const [imgPreview, setImgPreview] = useState();
  const [predict, setPredict] = useState([]);

  if (inProgress === 'Finish') {
    setInProgress(() => {
      return (
        <p>
          Your disesase is {diseases[predict[0]].name} {predict[1]}
        </p>
      );
    });
  }

  const preProcess = (image) => {
    setInProgress('Preprocessing Data ...');
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
      setInProgress('Predicting Image');
      const model = await tf.loadLayersModel('model/model.json');

      const img = document.getElementById('img');
      const imgNormalized = preProcess(img);

      const predictions = tf.tidy(() => {
        const output = model.predict(imgNormalized);
        const predictions = Array.from(tf.argMax(output, 1).dataSync());
        const confidents = Math.round(output.max().arraySync() * 10000) / 100;
        return [predictions[0], confidents];
      });

      setInProgress('Finish');
      setPredict(predictions);
    } catch (error) {
      console.error(error);
      setInProgress(() => {
        return <p>Error to predict image. Please try again</p>;
      });
    }
  };

  const handleInput = (e) => {
    const urlPreview = URL.createObjectURL(e.target.files[0]);
    setImgPreview(urlPreview);
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 justify-center justify-items-center gap-5 p-4">
        <ImageCard
          handleInput={handleInput}
          imgPreview={imgPreview}
          handleClick={classify}
        />
        <DescCard progressState={inProgress} />

        {/* <input
          type="file"
          className="file-input file-input-bordered file-input-md w-full max-w-xs"
          onChange={handleInput}
        /> */}
        {/* <img id="img" src={imgPreview} alt="" /> */}
        {/* <button className="btn-primary btn" onClick={classify}>
          Classify
        </button> */}
      </div>
    </div>
  );
};
