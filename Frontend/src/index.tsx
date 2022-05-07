import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthUser} from './Context/Authenticate';


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
      <AuthUser>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthUser>
    </BrowserRouter>
      
    
   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
