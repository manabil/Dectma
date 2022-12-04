import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import StateTutorial from './Latihan/StateTutorial';
import { StateReact } from './Latihan/StateReact';
import { SharingState } from './Latihan/SharingState';
import { PreserveReset } from './Latihan/PreserveReset';
import { Reducer } from './Latihan/Reducer';
import { Context } from './Latihan/Context';
import { ContextReducer } from './Latihan/ContextReducer';
import { Ref } from './Latihan/Ref';
import { RefDOM } from './Latihan/RefDOM';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar jos={'as'} />
    <StateTutorial />
    <StateReact />
    <SharingState />
    <PreserveReset />
    <Reducer />
    <Context />
    <ContextReducer />
    <Ref />
    <RefDOM />
  </React.StrictMode>
);
