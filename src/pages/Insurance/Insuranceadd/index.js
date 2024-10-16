import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Insuranceadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', product_name: '', weight: '', destination: '', bank_name: '', cargo_serial_number: '', claim_period: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/insurance/${id}`).then(function (response) {
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
                apiurl =`/insurance/edit/${inputs.id}`;
            } else {
                apiurl =`/insurance/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/insurance')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Insurance Information</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="companyy">Company Name</label>
    <input defaultValue={inputs.company} name="company" onChange={handleChange} type="text" id="company" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Product Name</label>
    <input defaultValue={inputs.product_name} name="product_name" onChange={handleChange} type="product_name" id="name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Weight</label>
    <input defaultValue={inputs.weight} name="weight" onChange={handleChange} type="text" id="weight" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Destination</label>
    <input defaultValue={inputs.destination} name="destination" onChange={handleChange} type="text" id="destination" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Bank Name</label>
    <input defaultValue={inputs.bank_name} name="bank_name" onChange={handleChange} type="text" id="bank_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Cargo Serial Number</label>
    <input defaultValue={inputs.cargo_serial_number} name="cargo_serial_number" onChange={handleChange} type="text" id="cargo_serial_number" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Claim Period</label>
    <input defaultValue={inputs.claim_period} name="claim_period" onChange={handleChange} type="text" id="claim_period" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Insuranceadd