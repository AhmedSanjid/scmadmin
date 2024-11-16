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
import Dues from './pages/Dues';
import Pay from './pages/Pay';
import Staff from './pages/Staff';
import Staffadd from './pages/Staff/Staffadd';
import Vendors from './pages/Vendors';
import Freights from './pages/freights';
import Freightsadd from './pages/freights/freightsadd';
import Country from './pages/Country';
import Countryadd from './pages/Country/Countryadd';
import Customer from './pages/Customer';
import Customeradd from './pages/Customer/Customeradd';
import State from './pages/State';
import Stateadd from './pages/State/Stateadd';
import Location from './pages/Location';
import Locationadd from './pages/Location/Locationadd';
import WarehouseBlock from './pages/Warehouseblock';
import WarehouseBlockadd from './pages/Warehouseblock/Warehouseblockadd';
import Itemcategory from './pages/Itemcategory';
import Itemcategoryadd from './pages/Itemcategory/Itemcategoryadd';
import Item from './pages/Item';
import Itemadd from './pages/Item/Itemadd';
import Transporttype from './pages/Transporttype';
import Transporttypeadd from './pages/Transporttype/Transporttypeadd';
import Cargotrack from './pages/Cargotrack';
import Cargotrackadd from './pages/Cargotrack/Cargotrackadd';
import Alert from './pages/Alert';
import Alertadd from './pages/Alert/Alertadd';
import History from './pages/History';
import Historyadd from './pages/History/Historyadd';


function App() {
  const isSignedIn = localStorage.getItem("access_token") || false;
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="Insurance" element={<Insurance />} />
      <Route path={"/insurance/edit/:id"} element={<Insuranceadd />} />
      <Route path={"/insurance/add"} element={<Insuranceadd />} />
      <Route path="warehouse" element={<Warehouse />} />
      <Route path={"/warehouse/edit/:id"} element={<Warehouseadd />} />
      <Route path={"/warehouse/add"} element={<Warehouseadd />} />
      <Route path={"airfreight"} element={<Airfreight />} />
      <Route path={"/airfreight/edit/:id"} element={<Airfreightadd />} />
      <Route path={"/airfreight/add"} element={<Airfreightadd />} />
      <Route path="sailingfreight" element={<Sailingfreight />} />
      <Route path={"/sailingfreight/edit/:id"} element={<Sailingfreightadd />} />
      <Route path={"/sailingfreight/add"} element={<Sailingfreightadd />} />
      <Route path="highwayfreight" element={<Highwayfreight />} />
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
      <Route path="Dues" element={<Dues />} />
      <Route path="Pay" element={<Pay />} />
      <Route path="Staff" element={<Staff />} />
      <Route path={"/Staff/add"} element={<Staffadd />} />
      <Route path={"/Staff/edit/:id"} element={<Staffadd />} />
      <Route path="Vendors" element={<Vendors />} />
      <Route path="Freights" element={<Freights />} />
      <Route path={"/Freights/edit/:id"} element={<Freightsadd />} />
      <Route path={"/Freights/add"} element={<Freightsadd />} />
      <Route path={"Country"} element={<Country />} />
      <Route path={"/Country/edit/:id"} element={<Countryadd />} />
      <Route path={"/Country/add"} element={<Countryadd />} />
      <Route path="customer" element={<Customer />} />
      <Route path={"/customer/edit/:id"} element={<Customeradd />} />
      <Route path={"/customer/add"} element={<Customeradd />} />
      <Route path="State" element={<State />} />
      <Route path={"/State/edit/:id"} element={<Stateadd />} />
      <Route path={"/State/add"} element={<Stateadd />} />
      <Route path="Location" element={<Location />} />
      <Route path={"/Location/edit/:id"} element={<Locationadd />} />
      <Route path={"/Location/add"} element={<Locationadd />} />
      <Route path="Warehouseblock" element={<WarehouseBlock />} />
      <Route path={"/Warehouseblock/edit/:id"} element={<WarehouseBlockadd />} />
      <Route path={"/Warehouseblock/add"} element={<WarehouseBlockadd />} />
      <Route path="Itemcategory" element={<Itemcategory />} />
      <Route path={"/Itemcategory/edit/:id"} element={<Itemcategoryadd />} />
      <Route path={"/Itemcategory/add"} element={<Itemcategoryadd />} />
      <Route path="Item" element={<Item />} />
      <Route path={"/Item/edit/:id"} element={<Itemadd />} />
      <Route path={"/Item/add"} element={<Itemadd />} />
      <Route path="Transporttype" element={<Transporttype />} />
      <Route path={"/Transporttype/edit/:id"} element={<Transporttypeadd />} />
      <Route path={"/Transporttype/add"} element={<Transporttypeadd />} />
      <Route path="Cargotrack" element={<Cargotrack />} />
      <Route path={"/Cargotrack/edit/:id"} element={<Cargotrackadd />} />
      <Route path={"/Cargotrack/add"} element={<Cargotrackadd />} />
      <Route path="Alert" element={<Alert />} />
      <Route path={"/Alert/add"} element={<Alertadd />} />
      <Route path={"/Alert/edit/:id"} element={<Alertadd />} />
      <Route path="History" element={<History />} />
      <Route path={"/History/add"} element={<Historyadd />} />
      <Route path={"/History/edit/:id"} element={<Historyadd />} />
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
