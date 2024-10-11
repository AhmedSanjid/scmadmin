import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Toyota() {
  
  return (
    <AdminLayout>

<div class="container my-4">
    <h2 class="text-center">Cost of Toyota Motor Corporation - Breakdown</h2>
    <table class="table table-striped table-bordered table-hover">
      <thead class="table-info">
        <tr>
          <th scope="col">Cost Category</th>
          <th scope="col">Amount (USD)</th>
          <th scope="col">Transaction Date</th>
          <th scope="col">Bank Transaction ID</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>Warehouse</td>
          <td>$500,000</td>
          <td>2023-08-10</td>
          <td>MUFJ-001-Warehouse</td>
        </tr>
        <tr>
          <td>Transportation</td>
          <td>$850,000</td>
          <td>2023-09-01</td>
          <td>MUFJ-002-Transport</td>
        </tr>
        <tr>
          <td>Taxes</td>
          <td>$300,000</td>
          <td>2023-08-25</td>
          <td>MUFJ-003-Taxes</td>
        </tr>
        <tr>
          <td>Toll Charges</td>
          <td>$50,000</td>
          <td>2023-08-15</td>
          <td>MUFJ-004-Toll</td>
        </tr>
        <tr>
          <td>Labor Wages</td>
          <td>$200,000</td>
          <td>2023-09-05</td>
          <td>MUFJ-005-Labor</td>
        </tr>
        <tr>
          <td>Air Freight</td>
          <td>$1,500,000</td>
          <td>2023-09-12</td>
          <td>MUFJ-006-AirFreight</td>
        </tr>
        <tr>
          <td>Sailing Freight</td>
          <td>$700,000</td>
          <td>2023-09-07</td>
          <td>MUFJ-007-Sailing</td>
        </tr>
        <tr>
          <td>Highway Freight</td>
          <td>$900,000</td>
          <td>2023-09-10</td>
          <td>MUFJ-008-Highway</td>
        </tr>
        <tr class="table-success">
          <td><strong>Total</strong></td>
          <td><strong>$5,000,000</strong></td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
  
    </AdminLayout>
  )
}

export default Toyota