import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Airfreight() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/airfreight/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/airfreight/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
<div class="container mt-5">
    <h2>Air Freight Info</h2>
    <Link to={'/airfreight/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Flight Number</th>
            <th>Arrival Airport Name</th>
            <th>Insurance Number</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.company_name}</td>
            <td>{d.flight_number}</td>
            <td>{d.arrival_airport_name}</td>
            <td>{d.insurance_number}</td>
            <td>
                <Link to={`/airfreight/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Airfreight