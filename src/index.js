import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Latihan from './components/Latihan';
import { LatihanForm } from './components/LatihanForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar jos={'as'} />
    <Latihan />
    <LatihanForm />
  </React.StrictMode>
);
