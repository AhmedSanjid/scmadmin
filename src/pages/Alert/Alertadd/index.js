import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Warehouseadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', contact_no: '', email: '', location: '', freight_type:'', alert_type:'', status:'', time:'', date:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/alert/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    useEffect(() => {
        if (id) {
            getDatas();
        }
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs)

        try {
            let apiurl = '';
            if (inputs.id != '') {
                apiurl =`/alert/edit/${inputs.id}`;
            } else {
                apiurl =`/alert/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/alert')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Edit</h2>
    <form onSubmit={handleSubmit}>
    
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name" onChange={handleChange} placeholder="Enter your name" required/>
    </div>

    
    <div class="mb-3">
      <label for="contactNumber" class="form-label">Contact Number</label>
      <input type="tel" class="form-control" id="contactNumber" name="contact_no" onChange={handleChange} placeholder="Enter your contact number" required/>
    </div>

    <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" name="email" onChange={handleChange} placeholder="Enter your email" required/>
    </div>


    <div class="mb-3">
      <label for="location" class="form-label">Location</label>
      <input type="text" class="form-control" id="location" name="location" onChange={handleChange} placeholder="Enter your location" required/>
    </div>

    
    <div class="mb-3">
      <label for="freightType" class="form-label">Freight Types</label>
      <select class="form-select" id="freightType" name="freight_type" onChange={handleChange} required>
        <option value="">Select Freight Type</option>
        <option value="Air">Air Freight</option>
        <option value="Sailing">Sailing Freight</option>
        <option value="Highway">Highway Freight</option>
      </select>
    </div>

    
    <div class="mb-3">
      <label for="alterType" class="form-label">Alter Types</label>
      <select class="form-select" id="alterType" name="alert_type" onChange={handleChange} required>
        <option value="">Select Alter Type</option>
        <option value="Order">Order</option>
        <option value="Inventory">Inventory</option>
        <option value="Transportation">Transportation</option>
        <option value="Warehouse">Warehouse</option>
        <option value="Supplie">Supplie</option>
        <option value="Customer Service">Customer Service</option>
        <option value="Compliance">Compliance</option>
        <option value="Transection">Transection</option>
        <option value="Financial">Financial</option>
        <option value="Environmental">Environmental</option>
        <option value="Custom">Custom</option>
        <option value="Security">Security</option>
        <option value="Quality Control">Quality Control</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Risk Management">Risk Management</option>
        <option value="Facility Management">Facility Management</option>
        <option value="Delivery">Delivery</option>
      </select>
    </div>

    
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <textarea class="form-control" id="status" name="status" rows="4" onChange={handleChange} placeholder="Enter the status" required></textarea>
    </div>    

    
    <div class="mb-3">
      <label for="localTime" class="form-label">Time</label>
      <input type="time" class="form-control" id="localTime" name="time" onChange={handleChange} required/>
    </div>

    
    <div class="mb-3">
      <label for="localDate" class="form-label">Date</label>
      <input type="date" class="form-control" id="localDate" name="date" onChange={handleChange} required/>
    </div>


    <div class="text-center">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Warehouseadd