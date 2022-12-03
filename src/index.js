import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Latihan from './Latihan/Latihan';
import { LatihanForm } from './Latihan/LatihanForm';
import { SharingState } from './Latihan/SharingState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar jos={'as'} />
    <Latihan />
    <LatihanForm />
    <SharingState />
  </React.StrictMode>
);
