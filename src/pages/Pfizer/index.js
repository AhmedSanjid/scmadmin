import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Pfizer() {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of Pfizer Inc.</h1>
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
                <td>2022-05-15</td>
                <td>TX123456</td>
                <td>Warehouse</td>
                <td>Cost of Storage</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123457</td>
                <td>Transportation</td>
                <td>Shipping</td>
                <td>$1,500,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123458</td>
                <td>Tax</td>
                <td>State Tax</td>
                <td>$500,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123459</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$150,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123460</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$2,000,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123461</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$1,800,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123462</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$1,000,000</td>
            </tr>
            <tr>
                <td>2022-05-15</td>
                <td>TX123463</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$1,000,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$9,600,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default Pfizer