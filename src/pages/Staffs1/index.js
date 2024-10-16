import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Staffs1() {
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
    <h2 class="mb-4 text-center">Authorized Staffs</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <table class="table table-bordered table-striped table-hover">
       
         
        <thead class="table-info">
        <tr>
            <th>Designation</th>
            <th>Name</th>
            <th>Email</th>
            <th>Passkey</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Authorized Staff</td>
            <td>Nusrat Jahan</td>
            <td>nusrat_jahan@example.com</td>
            <td>nus_*456#</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        
        <tr>
            <td>Authorized Staff</td>
            <td>Shakib Hasan</td>
            <td>shakib_hasan@example.com</td>
            <td>password123</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
      
        <tr>
            <td>Authorized Staff</td>
            <td>Shamim Hossain</td>
            <td>shamim_hossain@example.com</td>
            <td>adminPass456</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        
        <tr>
            <td>Authorized Staff</td>
            <td>Muhammad Noor</td>
            <td>noor_muhammad@example.com</td>
            <td>modPass123</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Authorized Staff</td>
            <td>Imran Ahmed</td>
            <td>imran_ahmed@example.com</td>
            <td>modPass456</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Authorized Staff</td>
            <td>Yasmin Akter</td>
            <td>yasmin_akter@example.com</td>
            <td>modPass789</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>

        
        <tr>
            <td>Authorized Staff</td>
            <td>Asif Rahman</td>
            <td>asif_rahman@example.com</td>
            <td>authPass123</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
      

        <tr>
            <td>Authorized Staff</td>
            <td>Tahmina Jahan</td>
            <td>tahmina_jahan@example.com</td>
            <td>authPass456</td>
            <td>
              <button class="btn btn-secondary btn-sm">Edit</button>
              <button class="btn btn-warning btn-sm">Delete</button>
            </td>
        </tr>
          
          <tr>
              <td>Authorized Staff</td>
              <td>Mariyam Chowdhury</td>
              <td>mariyam_c@example.com</td>
              <td>authPass123</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
          <tr>
              <td>Authorized Staff</td>
              <td>Ruhul Amin</td>
              <td>ruhul_amin@example.com</td>
              <td>authPass456</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
          <tr>
              <td>Authorized Staff</td>
              <td>Tahmina Jahan</td>
              <td>tahmina_jahan@example.com</td>
              <td>authPass789</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                  <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
          
          <tr>
              <td>Authorized Staff</td>
              <td>Sadia Rahim</td>
              <td>sadia_rahim@example.com</td>
              <td>authPass012</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
          <tr>
              <td>Authorized Staff</td>
              <td>Mohammad Saif</td>
              <td>saif_mohammad@example.com</td>
              <td>authPass345</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
          <tr>
              <td>Authorized Staff</td>
              <td>Imran Ahmed</td>
              <td>imran_ahmed@example.com</td>
              <td>authPass678</td>
              <td>
                <button class="btn btn-secondary btn-sm">Edit</button>
                <button class="btn btn-warning btn-sm">Delete</button>
              </td>
          </tr>
      
          <tr>
              <td>Authorized Staff</td>
              <td>Akash Hossain</td>
              <td>akash_hossain@example.com</td>
              <td>authPass999</td>
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

export default Staffs1