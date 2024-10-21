import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Vendors() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/vendors/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/vendors/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2 class="text-center mb-4">Vendor's Report</h2>
    <Link to={'/vendors/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered">
        <thead class="table-success">
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Location</th>
            <th>Job Title</th>
            <th>Vehicle ID</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Photo</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.designation}</td>
            <td>{d.work_status}</td>
            <td>{d.details}</td>
            <td>{d.contact_number}</td>
            <td>{d.email }</td>
            <td>{d.photo}</td>
            <td>
                <Link to={`/vendors/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Vendors