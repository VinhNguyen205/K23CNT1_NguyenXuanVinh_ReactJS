import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NxvApp from './NxvApp';
import reportWebVitals from './reportWebVitals';

const Nxvroot = ReactDOM.createRoot(document.getElementById('Nxvroot'));
Nxvroot.render(
    <NxvApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();