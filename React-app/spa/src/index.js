import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap5/src/css/bootstrap.min.css';
import 'bootstrap5/src/js/bootstrap.bundle.min';

import reportWebVitals from './reportWebVitals';

import Navbar from './component/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Navbar />
  // </React.StrictMode>
  <Navbar />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
