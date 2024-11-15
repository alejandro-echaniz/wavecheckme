/* index.js */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Homepage from './pages/homepage/Homepage';
import About from './pages/about/About'
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
