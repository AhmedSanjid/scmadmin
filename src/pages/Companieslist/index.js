import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
function Companieslist() {
  return (
    <AdminLayout>

<div class="container my-4">
    <h2 class="text-center">Employees Contact List</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <Link to={'/'} className='btn btn-secondary float-end' >Edit</Link>
    <table class="table table-striped table-bordered table-hover">
      <thead class="table-info">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Company Name</th>
          <th scope="col">Name (HR)</th>
          <th scope="col">Contact (HR)</th>
          <th scope="col">Posting Location (HR)</th>
          <th scope="col">Name (Country Manager)</th>
          <th scope="col">Contact (Country Manager)</th>
          <th scope="col">Posting Location (Country Manager)</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <th scope="row">1</th>
          <td>Toyota Motor Corporation</td>
          <td>Akira Tanaka</td>
          <td>+81 3-5555-1234</td>
          <td>Toyota City, Japan</td>
          <td>Hiroshi Nakamura</td>
          <td>+81 3-5555-5678</td>
          <td>Toyota City, Japan</td>
        </tr>
        
        <tr>
          <th scope="row">2</th>
          <td>Pfizer Inc.</td>
          <td>Emily Carter</td>
          <td>+1 212-555-1234</td>
          <td>New York City, USA</td>
          <td>James Morgan</td>
          <td>+1 212-555-5678</td>
          <td>New York City, USA</td>
        </tr>
      
        <tr>
          <th scope="row">3</th>
          <td>Amazon</td>
          <td>Susan Lee</td>
          <td>+1 206-555-1234</td>
          <td>Seattle, Washington, USA</td>
          <td>Michael Johnson</td>
          <td>+1 206-555-5678</td>
          <td>Seattle, Washington, USA</td>
        </tr>
        
        <tr>
          <th scope="row">4</th>
          <td>Unilever</td>
          <td>Sophie Jones</td>
          <td>+44 20-5555-1234</td>
          <td>London, UK</td>
          <td>Robert Smith</td>
          <td>+44 20-5555-5678</td>
          <td>London, UK</td>
        </tr>
        
        <tr>
          <th scope="row">5</th>
          <td>Microsoft</td>
          <td>Lisa Brown</td>
          <td>+1 425-555-1234</td>
          <td>Redmond, Washington, USA</td>
          <td>David White</td>
          <td>+1 425-555-5678</td>
          <td>Redmond, Washington, USA</td>
        </tr>
      
        <tr>
          <th scope="row">6</th>
          <td>BASF SE</td>
          <td>Clara Mueller</td>
          <td>+49 621-555-1234</td>
          <td>Ludwigshafen, Germany</td>
          <td>Hans Weber</td>
          <td>+49 621-555-5678</td>
          <td>Ludwigshafen, Germany</td>
        </tr>
        
        <tr>
          <th scope="row">7</th>
          <td>Ford Motor Company</td>
          <td>John Davis</td>
          <td>+1 313-555-1234</td>
          <td>Dearborn, Michigan, USA</td>
          <td>Charles Taylor</td>
          <td>+1 313-555-5678</td>
          <td>Dearborn, Michigan, USA</td>
        </tr>
        
        <tr>
          <th scope="row">8</th>
          <td>HSBC Holdings plc</td>
          <td>Anna Thompson</td>
          <td>+44 20-5555-1234</td>
          <td>London, UK</td>
          <td>Mark Wilson</td>
          <td>+44 20-5555-5678</td>
          <td>London, UK</td>
        </tr>
        
        <tr>
          <th scope="row">9</th>
          <td>Johnson & Johnson</td>
          <td>Rachel Adams</td>
          <td>+1 732-555-1234</td>
          <td>New Brunswick, New Jersey, USA</td>
          <td>Steven Baker</td>
          <td>+1 732-555-5678</td>
          <td>New Brunswick, New Jersey, USA</td>
        </tr>
        
        <tr>
          <th scope="row">10</th>
          <td>UPS (United Parcel Service)</td>
          <td>Henry Clark</td>
          <td>+1 404-555-1234</td>
          <td>Atlanta, Georgia, USA</td>
          <td>Paul Turner</td>
          <td>+1 404-555-5678</td>
          <td>Atlanta, Georgia, USA</td>
        </tr>

        
      </tbody>
    </table>
  </div>
  
    </AdminLayout>
  )
}

export default Companieslist