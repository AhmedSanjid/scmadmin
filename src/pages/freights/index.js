import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
import DetailsView from './DetailsView';
import TableView from './TableView';
function Freights() {
  const[cview, setCview]=useState('table');
  
  const changeView = () => {
   if(cview=="table"){
    setCview('grid')
   }else{
    setCview('table')
   }
  }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Orders Info</h2>
    <Link to={'/freights/add'} className='btn btn-info float-end' >Add New</Link>
    <button type="button" className="btn btn-info" onClick={changeView}>Change View</button>
    {cview=='table'? <TableView />: <DetailsView/>}
  </div>

    </AdminLayout>
  )
}

export default Freights