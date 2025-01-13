//eslint-disable-next-line
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import { LoginPage } from './routes/route.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;