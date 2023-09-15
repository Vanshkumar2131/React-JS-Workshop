import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header';
import classtest from './classtest';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <classtest />
  </React.StrictMode>
);

const hi = ReactDOM.createRoot(document.getElementById('hi'));
hi.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);


reportWebVitals();
