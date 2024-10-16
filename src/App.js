import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protected from './components/protected';
import Insurance from './pages/Insurance';
import Insuranceadd from './pages/Insurance/Insuranceadd';
import Warehouse from './pages/Warehouse';
import Warehouseadd from './pages/Warehouse/Warehouseadd';
import Airfreight from './pages/Airfreight';
import Airfreightadd from './pages/Airfreight/Airfreightadd';
import Sailingfreight from './pages/Sailingfreight';
import Sailingfreightadd from './pages/Sailingfreight/Sailingfreightadd';
import Highwayfreight from './pages/Highwayfreight';
import Highwayfreightadd from './pages/Highwayfreight/Highwayfreightadd';
import Companieslist from './pages/Companieslist';
import Info from './pages/Info';
import Deals from './pages/Deals';
import Toyota from './pages/Toyota';
import Pfizer from './pages/Pfizer';
import Amazon from './pages/Amazon';
import Unilever from './pages/Unilever';
import Microsoft from './pages/Microsoft';
import BASF from './pages/BASF';
import Ford from './pages/Ford';
import HSBC from './pages/HSBC';
import Johnson from './pages/Johnson';
import UPS from './pages/UPS';
import Admin from './pages/Admin';
import Person from './pages/Person';
import Staffs1 from './pages/Staffs1';
import Dues from './pages/Dues';
import Pay from './pages/Pay';
import Staffs from './pages/Staffs';

function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Insurance" element={<Insurance />} />
          <Route path={"/insurance/edit/:id"} element={<Insuranceadd />} />
          <Route path={"/insurance/add"} element={<Insuranceadd />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path={"/warehouse/edit/:id"} element={<Warehouseadd />} />
          <Route path={"/warehouse/add"} element={<Warehouseadd />} />
          <Route path={"/airfreight"} element={<Airfreight />} />
          <Route path={"/airfreight/edit/:id"} element={<Airfreightadd />} />
          <Route path={"/airfreight/add"} element={<Airfreightadd />} />
          <Route path="/sailingfreight" element={<Sailingfreight />} />
          <Route path={"/sailingfreight/edit/:id"} element={<Sailingfreightadd />} />
          <Route path={"/sailingfreight/add"} element={<Sailingfreightadd />} />
          <Route path="/highwayfreight" element={<Highwayfreight />} />
          <Route path={"/highwayfreight/edit/:id"} element={<Highwayfreightadd />} />
          <Route path={"/highwayfreight/add"} element={<Highwayfreightadd />} />
          <Route path="Companieslist" element={<Companieslist />} />
          <Route path="Info" element={<Info />} />
          <Route path="Deals" element={<Deals />} />
          <Route path="Toyota" element={<Toyota />} />
          <Route path="Pfizer" element={<Pfizer />} />
          <Route path="Amazon" element={<Amazon />} />
          <Route path="Unilever" element={<Unilever />} />
          <Route path="Microsoft" element={<Microsoft />} />
          <Route path="BASF" element={<BASF />} />
          <Route path="Ford" element={<Ford />} />
          <Route path="HSBC" element={<HSBC />} />
          <Route path="Johnson" element={<Johnson />} />
          <Route path="UPS" element={<UPS />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Person" element={<Person />} />
          <Route path="Staffs1" element={<Staffs1 />} />
          <Route path="Dues" element={<Dues />} />
          <Route path="Pay" element={<Pay />} />
          <Route path="Staffs" element={<Staffs />} />
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
