import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Sailingfreightadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', ship_name: '', arrival_port_name: '', insurance_number: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Sailingfreight/${id}`).then(function (response) {
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
                apiurl =`/sailingfreight/edit/${inputs.id}`;
            } else {
                apiurl =`/sailingfreight/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/sailingfreight')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Info</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Company</label>
    <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Ship Name</label>
    <input defaultValue={inputs.ship_name} name="ship_name" onChange={handleChange} type="text" id="ship_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Arrival Port Name</label>
    <input defaultValue={inputs.arrival_port_name} name="arrival_port_name" onChange={handleChange} type="text" id="arrival_port_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Insurance Number</label>
    <input defaultValue={inputs.insurance_number} name="insurance_number" onChange={handleChange} type="text" id="insurance_number" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Sailingfreightadd