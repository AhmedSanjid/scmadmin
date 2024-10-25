import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Customer() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/customer/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Company</h2>
    <Link to={'/customer/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-success">
        <tr>
          <th>SL</th>
          <th>Company Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Address</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.company_name}</td>
            <td>{d.contact_no}</td>
            <td>{d.email}</td>
            <td>{d.address}</td>
            <td>
                <Link to={`/customer/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Customer