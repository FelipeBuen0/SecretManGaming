import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import Login from './app/authentication/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './app/view/main/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login/>}/>
        <Route path="dashboard" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);