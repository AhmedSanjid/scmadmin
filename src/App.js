import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protected from './components/protected';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path={"/"} element={
            <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            </Protected>
          } />
      {/* <Route path="/" element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;