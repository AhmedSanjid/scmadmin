import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Warehouseadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', category: '', product_details: '', insurance_number: '', invoice_number: ''});
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
    <label forhtml="blog-date">Company Name</label>
    <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Category</label>
    <input defaultValue={inputs.category} name="category" onChange={handleChange} type="text" id="category" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Product Details</label>
    <input defaultValue={inputs.product_details} name="product_details" onChange={handleChange} type="text" id="product_details" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Insurance Number</label>
    <input defaultValue={inputs.insurance_number} name="insurance_number" onChange={handleChange} type="text" id="insurance_number" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Invoice Number</label>
    <input defaultValue={inputs.invoice_number} name="invoice_number" onChange={handleChange} type="text" id="invoice_number" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Warehouseadd