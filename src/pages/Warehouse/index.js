import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Warehouse() {
  return (
    <AdminLayout>
      <div class="container mt-5">
    <h2>Warehouse booking</h2>
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
        <tr>
            <th>ID Number</th>
            <th>Name</th>
            <th>Company Name</th>
            <th>Product Details</th>
            <th>Category</th>
            <th>Insurance Number</th>
            <th>Invoice Number</th>
            <th>Tax</th>
            <th>Total Amount</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <input type="text" class="form-control" placeholder="ID Number"/>
            <input type="text" class="form-control" placeholder="Name"/>
            <input type="text" class="form-control" placeholder="Company Name"/>
            <input type="text" class="form-control" placeholder="Product Details"/>
            <input type="text" class="form-control" placeholder="Category"/>
            <input type="text" class="form-control" placeholder="Insurance Number"/>
            <input type="text" class="form-control" placeholder="Invoice Number"/>
            <input type="number" class="form-control" placeholder="Tax"/>
            <input type="number" class="form-control" placeholder="Total Amount"/>
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

export default Warehouse