import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Person() {
  const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/insurance/`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/insurance/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>
  
  <div class="container my-4">
    <h2 class="mb-4">Authorized Persons</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-bordered table-striped table-hover">
        <thead class="table-info" >
        <tr>
            <th>Company Name</th>
            <th>Authorized Person Name</th>
            <th>Email</th>
            <th>Passkey</th>
            <th>Work Designation</th>
            <th>Contact Number</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        
        <tr>
            <td>ABC Corp</td>
            <td>John Doe</td>
            <td>john.doe@abccorp.com</td>
            <td>passkey123</td>
            <td>Manager</td>
            <td>(123) 456-7890</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>XYZ Ltd</td>
            <td>Jane Smith</td>
            <td>jane.smith@xyzltd.com</td>
            <td>passkey456</td>
            <td>Director</td>
            <td>(234) 567-8901</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Tech Innovations</td>
            <td>Mike Johnson</td>
            <td>mike.j@techinnovations.com</td>
            <td>passkey789</td>
            <td>CTO</td>
            <td>(345) 678-9012</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Global Solutions</td>
            <td>Emily Davis</td>
            <td>emily.d@globalsolutions.com</td>
            <td>passkey234</td>
            <td>Operations</td>
            <td>(456) 789-0123</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Smart Enterprises</td>
            <td>Chris Lee</td>
            <td>chris.l@smartenterprises.com</td>
            <td>passkey567</td>
            <td>Sales</td>
            <td>(567) 890-1234</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Eco Friendly Co.</td>
            <td>Sarah Brown</td>
            <td>sarah.b@ecofriendly.com</td>
            <td>passkey890</td>
            <td>Marketing</td>
            <td>(678) 901-2345</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Finance Hub</td>
            <td>Daniel White</td>
            <td>daniel.w@financehub.com</td>
            <td>passkey321</td>
            <td>Accountant</td>
            <td>(789) 012-3456</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Retail Group</td>
            <td>Laura Wilson</td>
            <td>laura.w@retailgroup.com</td>
            <td>passkey654</td>
            <td>HR Manager</td>
            <td>(890) 123-4567</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Logistics Inc.</td>
            <td>Robert Hall</td>
            <td>robert.h@logisticsinc.com</td>
            <td>passkey987</td>
            <td>Logistics Coordinator</td>
            <td>(901) 234-5678</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Digital Media</td>
            <td>Jessica Adams</td>
            <td>jessica.a@digitalmedia.com</td>
            <td>passkey159</td>
            <td>Content Strategist</td>
            <td>(012) 345-6789</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Manufacturing Co.</td>
            <td>James Robinson</td>
            <td>james.r@manufacturingco.com</td>
            <td>passkey753</td>
            <td>Production Manager</td>
            <td>(123) 456-7891</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Construction Ltd.</td>
            <td>Patricia Martinez</td>
            <td>patricia.m@constructionltd.com</td>
            <td>passkey852</td>
            <td>Site Supervisor</td>
            <td>(234) 567-8902</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Healthcare Solutions</td>
            <td>Charles Hernandez</td>
            <td>charles.h@healthcaresolutions.com</td>
            <td>passkey246</td>
            <td>Healthcare Advisor</td>
            <td>(345) 678-9013</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Education Group</td>
            <td>Amanda Thompson</td>
            <td>amanda.t@educationgroup.com</td>
            <td>passkey135</td>
            <td>Program Director</td>
            <td>(456) 789-0124</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Hospitality Inc.</td>
            <td>Jason White</td>
            <td>jason.w@hospitalityinc.com</td>
            <td>passkey864</td>
            <td>Operations Manager</td>
            <td>(567) 890-1235</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Automotive Ltd.</td>
            <td>Linda Clark</td>
            <td>linda.c@automotiveltd.com</td>
            <td>passkey963</td>
            <td>Product Engineer</td>
            <td>(678) 901-2346</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Textiles Corp.</td>
            <td>Kevin Lewis</td>
            <td>kevin.l@textilescorp.com</td>
            <td>passkey159</td>
            <td>Quality Control</td>
            <td>(789) 012-3457</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Real Estate Co.</td>
            <td>Maria Walker</td>
            <td>maria.w@realestateco.com</td>
            <td>passkey753</td>
            <td>Property Manager</td>
            <td>(890) 123-4568</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Pharmaceutical Ltd.</td>
            <td>George Hall</td>
            <td>george.h@pharmaceuticalltd.com</td>
            <td>passkey456</td>
            <td>Research Scientist</td>
            <td>(901) 234-5679</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Telecom Solutions</td>
            <td>Rachel Young</td>
            <td>rachel.y@telecomsolutions.com</td>
            <td>passkey852</td>
            <td>Network Engineer</td>
            <td>(012) 345-6780</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Legal Advisors</td>
            <td>Andrew King</td>
            <td>andrew.k@legaladvisors.com</td>
            <td>passkey321</td>
            <td>Legal Consultant</td>
            <td>(123) 456-7892</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Catering Services</td>
            <td>Emma Wright</td>
            <td>emma.w@cateringservices.com</td>
            <td>passkey654</td>
            <td>Chef</td>
            <td>(234) 567-8903</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Security Group</td>
            <td>Mark Scott</td>
            <td>mark.s@securitygroup.com</td>
            <td>passkey789</td>
            <td>Security Officer</td>
            <td>(345) 678-9014</td>
            <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        </tbody>
    </table>
</div>

    </AdminLayout>
  )
}

export default Person