import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Highwayfreight() {
    const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);
  
    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/highwayfreight/`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/highwayfreight/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
<div class="container mt-5">
    <h2 class="text-center mb-4">Highway Freight Info</h2>
    <Link to={'/highwayfreight/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-success">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>vehicle id</th>
            <th>Arrival Location</th>
            <th>Insurance Number</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.company}</td>
            <td>{d.vehicle_id}</td>
            <td>{d.arrival_location}</td>
            <td>{d.insurance_number}</td>
            <td>
                <Link to={`/highwayfreight/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Highwayfreight