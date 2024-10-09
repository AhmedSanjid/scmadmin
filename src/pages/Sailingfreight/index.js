import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Sailingfreight() {
  return (
    <AdminLayout>
<div class="container mt-5">
    <h2>Sailing Freight</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
            <th>Flight Number</th>
            <th>Arrival Port</th>
            <th>Insurance Number</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <input type="text" class="form-control" placeholder="ID"/>
            <input type="text" class="form-control" placeholder="Name"/>
            <input type="text" class="form-control" placeholder="Company"/>
            <input type="text" class="form-control" placeholder="Ship Name"/>
            <input type="text" class="form-control" placeholder="Arrival Port"/>
            <input type="text" class="form-control" placeholder="Insurance Number"/>
            <td>
                <button class="btn btn-primary btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Decline</button>
                <button class="btn btn-success btn-sm">Approve</button>
            </td>
        </tr>
        
        </tbody>
    </table>
</div>
    </AdminLayout>
  )
}

export default Sailingfreight