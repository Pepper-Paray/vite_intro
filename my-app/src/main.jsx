
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style.scss/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter /* basename can be set if deploying under a subpath */>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
