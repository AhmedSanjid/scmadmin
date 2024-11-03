import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Staff() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/Staff/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/Staff/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
      <div className="container mt-5">
    <h2 className="text-center mb-4">Staff</h2>
    <Link to={'/Staff/add'} className='btn btn-primary float-end' >Add New</Link>
    <table className="table table-striped table-bordered">
        <thead className="table-success">
        <tr>
            <th>SL</th>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.user?.email}</td>
            <td>{d.designation}</td>
            <td>{d.contact_no}</td>
            <td>{d.address}</td>
            <td>
                <Link to={`/Staff/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
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

export default Staff