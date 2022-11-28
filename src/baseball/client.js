import io from 'socket.io-client';
const predictContainer = document.getElementById('predictContainer');
const predictButton = document.getElementById('predict-button');

const socket = io('http://localhost:8001', { reconnectionDelay: 300, reconnectionDelayMax: 300 });

const testSample = [2.668, -114.333, -1.908, 4.786, 25.707, -45.21, 78, 0]; // Curveball

predictButton.onclick = () => {
  predictButton.disabled = true;
  socket.emit('predictSample', testSample);
};

// functions to handle socket events
socket.on('connect', () => {
  document.getElementById('waiting-msg').style.display = 'none';
  document.getElementById('trainingStatus').innerHTML = 'Training in Progress';
});

socket.on('trainingComplete', () => {
  document.getElementById('trainingStatus').innerHTML = 'Training Complete';
  document.getElementById('predictSample').innerHTML = '[' + testSample.join(', ') + ']';
  predictContainer.style.display = 'block';
});

socket.on('predictResult', (result) => {
  plotPredictResult(result);
});

socket.on('disconnect', () => {
  document.getElementById('trainingStatus').innerHTML = '';
  predictContainer.style.display = 'none';
  document.getElementById('waiting-msg').style.display = 'block';
});

function plotPredictResult(result) {
  predictButton.disabled = false;
  document.getElementById('predictResult').innerHTML = result;
  console.log(result);
}
