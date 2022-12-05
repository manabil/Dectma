import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import * as tf from '@tensorflow/tfjs';

export const Classify = () => {
  const [inProgress, setInProgress] = useState('idle');
  let model = null;

  const loadModel = async () => {
    setInProgress('Load the model');
    model = await tf.loadLayersModel('model/model.json');
    setInProgress('Idle');
  };

  useEffect(() => {
    loadModel();
  }, []);

  const classify = async () => {
    setInProgress('Processing');
    const img = document.getElementById('img');
    tf.tidy(async () => {
      const jos = tf.browser.fromPixels(img);
      const josPol = tf.expandDims(jos);
      const josPolWow = tf.image.resizeBilinear(josPol, [224, 224]);
      const predictions = await model.predict(josPolWow);
      console.log('IMAGE FROM PIXEL');
      console.log(josPol.shape);
      console.log('RESIZE');
      console.log(josPolWow.shape);
      console.log('PREDICTION');
      console.log(predictions);
      setInProgress('Finish');
    });
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 p-2 bg-slate-300 justify-items-center gap-5">
        <img id="img" src="healthy.jpg" alt="" />
        <button className="btn btn-primary" onClick={classify}>
          Classify
        </button>
        {inProgress}
      </div>
    </div>
  );
};
