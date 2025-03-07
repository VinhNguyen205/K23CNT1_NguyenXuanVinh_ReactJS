import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './nxv-lesson3';
import reportWebVitals from './reportWebVitals';

const nxvRoot = ReactDOM.createRoot(document.getElementById('nxvRoot'));
nxvRoot.render(
  <React.StrictMode>
    <nxvApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your a
//pp, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
