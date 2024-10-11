import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Unilever() {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of Unilever - Breakdown</h1>
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
                <td>2023-07-18</td>
                <td>TX2000001</td>
                <td>Warehouse</td>
                <td>Storage Cost</td>
                <td>$1,500,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000002</td>
                <td>Transportation</td>
                <td>Shipping & Delivery</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000003</td>
                <td>Tax</td>
                <td>Government Tax</td>
                <td>$900,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000004</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$120,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000005</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$1,800,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000006</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$500,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000007</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$750,000</td>
            </tr>
            <tr>
                <td>2023-07-18</td>
                <td>TX2000008</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$730,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$7,500,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default Unilever