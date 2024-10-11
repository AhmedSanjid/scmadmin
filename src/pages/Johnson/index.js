import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Johnson () {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of Johnson & Johnson</h1>
    <table class="table table-bordered table-striped table-hover">
        <thead class="table-dark">
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
                <td>2023-06-01</td>
                <td>TX6500001</td>
                <td>Warehouse</td>
                <td>Storage Cost</td>
                <td>$3,500,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500002</td>
                <td>Transportation</td>
                <td>Shipping & Delivery</td>
                <td>$3,200,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500003</td>
                <td>Tax</td>
                <td>Government Tax</td>
                <td>$1,600,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500004</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$200,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500005</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$4,000,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500006</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$600,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500007</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$900,000</td>
            </tr>
            <tr>
                <td>2023-06-01</td>
                <td>TX6500008</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$1,000,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$13,950,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default Johnson 