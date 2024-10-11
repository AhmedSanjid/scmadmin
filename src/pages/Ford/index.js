import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Ford() {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of Ford Motor Company</h1>
    <table class="table table-bordered table-striped table-hover">
        <thead class="table-info">
            <tr>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Sector</th>
                <th>Cost Type</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500001</td>
                <td>Warehouse</td>
                <td>Storage Cost</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500002</td>
                <td>Transportation</td>
                <td>Shipping & Delivery</td>
                <td>$1,500,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500003</td>
                <td>Tax</td>
                <td>Government Tax</td>
                <td>$850,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500004</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$100,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500005</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500006</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$750,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500007</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$500,000</td>
            </tr>
            <tr>
                <td>2021-08-11</td>
                <td>TX4500008</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$350,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$6,450,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default Ford