import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Insurance() {
  const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/insurance/`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/insurance/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Insurance Information</h2>
    <Link to={'/insurance/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-success">
        <tr>
        <th>SL</th>
          <th>Name</th>
          <th>Company Name</th>
          <th>Product Name</th>
          <th>Weight</th>
          <th>Destination</th>
          <th>Bank Name</th>
          <th>Cargo Serial Number</th>
          <th>Claim Period</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.company_name}</td>
            <td>{d.product_name}</td>
            <td>{d.weight}</td>
            <td>{d.destination}</td>
            <td>{d.bank_name}</td>
            <td>{d.cargo_serial_number}</td>
            <td>{d.claim_period}</td>
            <td>
                <Link to={`/insurance/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-warning'>Delete</button>
                <button type='button' onClick={() => (d.id)} className='btn btn-success'>Approve</button>
            </td>
        </tr>
    )}
        </tbody>
    </table>
  </div>

    </AdminLayout>
  )
}

export default Insurance