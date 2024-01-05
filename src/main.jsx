import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './index.css';

const root = document.getElementById('root');
const rootElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


const rootRender = ReactDOM.createRoot(root);
rootRender.render(rootElement);