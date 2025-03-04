import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NqtApp from './NqtApp';
import reportWebVitals from './reportWebVitals';

const Nqtroot = ReactDOM.createRoot(document.getElementById('Nqtroot'));
Nqtroot.render(
  <NqtApp />
  // <React.StrictMode>
  //   <NqtApp />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
