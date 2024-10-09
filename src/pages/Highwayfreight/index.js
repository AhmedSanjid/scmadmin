import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Highwayfreight() {
  return (
    <AdminLayout>
<div class="container mt-5">
    <h2>Vehicle Insurance Claims Form</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Vehicle ID</th>
            <th>Arrival Location</th>
            <th>Insurance Number</th>
            <th>Actions</th>
        </tr>
        </thead>
    
        <tr>
            <input type="text" class="form-control" placeholder="ID"/>
            <input type="text" class="form-control" placeholder="Name"/>
            <input type="text" class="form-control" placeholder="Company"/>
            <input type="text" class="form-control" placeholder="Vehicle ID"/>
            <input type="text" class="form-control" placeholder="Arrival Location"/>
            <input type="text" class="form-control" placeholder="Insurance Number"/>
            <td>
                <button class="btn btn-primary btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Decline</button>
                <button class="btn btn-success btn-sm">Approve</button>
            </td>
        </tr>
        
    
    </table>
</div>
    </AdminLayout>
  )
}

export default Highwayfreight