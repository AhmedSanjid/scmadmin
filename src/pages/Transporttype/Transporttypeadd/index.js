import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Transporttypeadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', type: '', base_price: '', per_unit_price: '', average_duration: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Transporttype/${id}`).then(function (response) {
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
                apiurl =`/Transporttype/edit/${inputs.id}`;
            } else {
                apiurl =`/Transporttype/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Transporttype')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Transport</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Type</label>
    <input defaultValue={inputs.type} name="type" onChange={handleChange} type="text" id="type" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Base Price</label>
    <input defaultValue={inputs.base_price} name="base_price" onChange={handleChange} type="text" id="base_price" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Per Unit Price</label>
    <input defaultValue={inputs.per_unit_price} name="per_unit_price" onChange={handleChange} type="text" id="per_unit_price" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Average Duration</label>
    <input defaultValue={inputs.average_duration} name="average_duration" onChange={handleChange} type="text" id="average_duration" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Transporttypeadd