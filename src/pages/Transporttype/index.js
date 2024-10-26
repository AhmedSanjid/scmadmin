import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Transporttype() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/Transporttype/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/Transporttype/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2 class="text-center mb-4">Transportations</h2>
    <Link to={'/Transporttype/add'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-success">
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Type</th>
            <th>Base Price</th>
            <th>Per Unit Price</th>
            <th>Average Duration</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.type}</td>
            <td>{d.base_price}</td>
            <td>{d.per_unit_price}</td>
            <td>{d.average_duration}</td>
            <td>
                <Link to={`/Transporttype/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Transporttype