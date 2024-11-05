import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Cargotrack() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/cargotrack/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/cargotrack/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2 class="text-center mb-4">Cargo Info</h2>
    <Link to={'/cargotrack/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-success">
        <tr>
            <th>SL</th>
            <th>Status</th>
            <th>Note</th>
            <th>Location</th>
            <th>Date/Time</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Reciver</th>
            <th>Warehouse</th>
            <th>Warehouse Block</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.status}</td>
            <td>{d.note}</td>
            <td>{d.location}</td>
            <td>{d.location_time}</td>
            <td>{d.lat_id}</td>
            <td>{d.long_id}</td>
            <td>{d.recived_by}</td>
            <td>{d.warehouse?.name}</td>
            <td>{d.WarehouseBlock?.name}</td>
            <td>{d.note}</td>
            <td>
                <Link to={`/cargotrack/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Cargotrack