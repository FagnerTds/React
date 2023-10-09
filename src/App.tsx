import React from 'react';
import './App.css';
import Home from './assets/paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './assets/paginas/login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;