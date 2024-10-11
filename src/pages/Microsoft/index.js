import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Microsoft() {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of Microsoft</h1>
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
                <td>2020-04-09</td>
                <td>TX3000001</td>
                <td>Warehouse</td>
                <td>Storage Cost</td>
                <td>$2,500,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000002</td>
                <td>Transportation</td>
                <td>Shipping & Delivery</td>
                <td>$3,200,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000003</td>
                <td>Tax</td>
                <td>Government Tax</td>
                <td>$1,800,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000004</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$150,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000005</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$4,000,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000006</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$1,500,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000007</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2020-04-09</td>
                <td>TX3000008</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$1,000,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$15,800,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default Microsoft