import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function UPS () {
  
  return (
    <AdminLayout>

<div class="container mt-5">
    <h1 class="mb-4">Cost of United Parcel Service</h1>
    <table class="table table-bordered table-striped">
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
                <td>2021-03-19</td>
                <td>TX5400001</td>
                <td>Warehouse</td>
                <td>Storage Cost</td>
                <td>$2,000,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400002</td>
                <td>Transportation</td>
                <td>Shipping & Delivery</td>
                <td>$2,500,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400003</td>
                <td>Tax</td>
                <td>Government Tax</td>
                <td>$1,200,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400004</td>
                <td>Toll</td>
                <td>Toll Fees</td>
                <td>$300,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400005</td>
                <td>Labor</td>
                <td>Wages</td>
                <td>$2,000,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400006</td>
                <td>Air Freight</td>
                <td>Air Shipping</td>
                <td>$700,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400007</td>
                <td>Sailing Freight</td>
                <td>Sea Shipping</td>
                <td>$400,000</td>
            </tr>
            <tr>
                <td>2021-03-19</td>
                <td>TX5400008</td>
                <td>Highway Freight</td>
                <td>Ground Shipping</td>
                <td>$1,100,000</td>
            </tr>
        </tbody>
        <tfoot class="table-success">
            <tr>
                <td colspan="4" class="text-end fw-bold">Total Cost</td>
                <td class="fw-bold">$9,200,000</td>
            </tr>
        </tfoot>
    </table>
</div>
  
    </AdminLayout>
  )
}

export default UPS 