import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap5/src/css/bootstrap.min.css';

import App from './App';
import Todo from './component/todo';
import Store from './store';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
        <Todo />
  </Provider>
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
