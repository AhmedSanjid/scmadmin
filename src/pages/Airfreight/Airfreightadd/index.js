import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Airfreightadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', company_name: '', flight_number: '', arrival_airport_name: '', insurance_number: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Airfreight/${id}`).then(function (response) {
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
                apiurl =`/Airfreight/edit/${inputs.id}`;
            } else {
                apiurl =`/Airfreight/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Airfreight')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">Airfreight Information</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">company_name</label>
    <input defaultValue={inputs.company_name} name="company_name" onChange={handleChange} type="text" id="company_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">flight_number</label>
    <input defaultValue={inputs.flight_number} name="flight_number" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">arrival_airport_name</label>
    <input defaultValue={inputs.arrival_airport_name} name="arrival_airport_name" onChange={handleChange} type="text" id="arrival_airport_name" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">insurance_number</label>
    <input defaultValue={inputs.insurance_number} name="insurance_number" onChange={handleChange} type="text" id="insurance_number" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create Blog Post</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Airfreightadd