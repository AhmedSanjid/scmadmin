import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Admin() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/warehouse/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/warehouse/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
    <AdminLayout>
<div class="container mt-5">
    <h2 class="text-center mb-4">Admins</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <Link to={'/'} className='btn btn-secondary float-end' >Edit</Link>
    <table class="table table-bordered table-striped table-hover">
        <thead class="table-info">
            <tr>
                <th>Designation</th>
                <th>Name</th>
                <th>Email</th>
                <th>Passkey</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Super Admin</td>
                <td>Sanjid Ahmed Mukut</td>
                <td>ahmedmukut19@gmail.com</td>
                <td>diadem_*789#</td>
            </tr>
            <tr>
                <td>Admin</td>
                <td>Farhan Iqbal</td>
                <td>farhaniqbal_admin@yahoo.com</td>
                <td>admin_#12345</td>
            </tr>
            <tr>
                <td>Admin</td>
                <td>Anika Rahman</td>
                <td>anika_admin@yahoo.com</td>
                <td>admin_!56789</td>
            </tr>
            <tr>
                <td>Moderator</td>
                <td>Nadia Karim</td>
                <td>nadia_moderator@gmail.com</td>
                <td>mod_#6789</td>
            </tr>
            <tr>
                <td>Moderator</td>
                <td>Shafique Hasan</td>
                <td>shafique_moderator@gmail.com</td>
                <td>mod_&1234</td>
            </tr>
            <tr>
                <td>Moderator</td>
                <td>Akash Hossain</td>
                <td>akash_moderator@yahoo.com</td>
                <td>mod_!9876</td>
            </tr>
        </tbody>
    </table>
</div>

    </AdminLayout>
  )
}

export default Admin