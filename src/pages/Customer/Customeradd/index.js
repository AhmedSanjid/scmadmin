import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Customeradd() {
  const [inputs, setInputs] = useState({ id:'', company_name:'', contact_no: '', email:'', address:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/customer/${id}`).then(function (response) {
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
                apiurl =`/customer/edit/${inputs.id}`;
            } else {
                apiurl =`/customer/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/customer')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Companies</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

    <div class="col-md-6">
            <label for="company_name" class="form-label">Company Name</label>
            <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
    </div>

    <div class="col-md-6">
            <label for="contact_no" class="form-label">Contact Number</label>
            <input defaultValue={inputs.contact_no} name="contact_no" onChange={handleChange} type="text" id="contact_no" className="form-control" required />
    </div>

    <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input defaultValue={inputs.email} name="email" onChange={handleChange} type="text" id="email" className="form-control" required />
    </div>

    <div class="col-md-6">
            <label for="address" class="form-label">Address</label>
            <input defaultValue={inputs.address} name="address" onChange={handleChange} type="text" id="address" className="form-control" required />
    </div>
      
      <button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Customeradd