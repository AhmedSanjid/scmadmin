import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Warehouseblock() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/warehouseblock/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/warehouseblock/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2 class="text-center mb-4">Warehouse Block</h2>
    <Link to={'/warehouseblock/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-success">
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>width</th>
            <th>height</th>
            <th>depth</th>
            <th>location</th>
            <th>Note</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.width}</td>
            <td>{d.height}</td>
            <td>{d.depth}</td>
            <td>{d.location}</td>
            <td>{d.note}</td>
            <td>
                <Link to={`/warehouseblock/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Warehouseblock