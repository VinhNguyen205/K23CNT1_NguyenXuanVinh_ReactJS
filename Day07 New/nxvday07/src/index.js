import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NqtApp from './nqtApp';
import reportWebVitals from './reportWebVitals';

const nqtRoot = ReactDOM.createRoot(document.getElementById('nqtRoot'));
nqtRoot.render(
  <NqtApp />
  // <React.StrictMode>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
