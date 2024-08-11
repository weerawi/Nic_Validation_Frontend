import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import NicContextProvider from './Context/NicContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NicContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NicContextProvider>
     
);

 
reportWebVitals();
