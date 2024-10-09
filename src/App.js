import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protected from './components/protected';
import Insurance from './pages/Insurance';
import Insuranceadd from './pages/Insurance/Insuranceadd';
import Warehouse from './pages/Warehouse';
import Airfreight from './pages/Airfreight';
import Airfreightadd from './pages/Airfreight/Airfreightadd';
import Sailingfreight from './pages/Sailingfreight';
import Highwayfreight from './pages/Highwayfreight';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path={"/insuranceclaim/edit/:id"} element={<Insuranceadd />} />
          <Route path={"/insuranceclaim/add"} element={<Insuranceadd />} />
          <Route path="/Warehouse" element={<Warehouse />} />
          <Route path="/Airfreight" element={<Airfreight />} />
          <Route path="/Airfreight/edit/:id" element={<Airfreightadd />} />
          <Route path="/Airfreight/add" element={<Airfreightadd />} />
          <Route path="/Sailingfreight" element={<Sailingfreight />} />
          <Route path="/Highwayfreight" element={<Highwayfreight />} />
          <Route path={"/"} element={
            // <Protected isSignedIn={isSignedIn} >
              <Dashboard />
            // </Protected>
          } />
      {/* <Route path="/" element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
