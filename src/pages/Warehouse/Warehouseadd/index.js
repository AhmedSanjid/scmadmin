import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Warehouseadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', address: '', contact_no: '', employee_id: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/warehouse/${id}`).then(function (response) {
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
                apiurl =`/warehouse/edit/${inputs.id}`;
            } else {
                apiurl =`/warehouse/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/warehouse')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Booking</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Address</label>
    <input defaultValue={inputs.address} name="address" onChange={handleChange} type="text" id="address" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Contact No</label>
    <input defaultValue={inputs.contact_no} name="contact_no" onChange={handleChange} type="text" id="contact_no" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Employee</label>
    <input defaultValue={inputs.employee_id} name="employee_id" onChange={handleChange} type="text" id="employee_id" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Warehouseadd