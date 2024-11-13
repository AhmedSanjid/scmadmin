import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Warehouseblockadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', width: '', height: '', depth: '', location: '', note:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/warehouseblock/${id}`).then(function (response) {
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
                apiurl =`/warehouseblock/edit/${inputs.id}`;
            } else {
                apiurl =`/warehouseblock/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/warehouseblock')
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
    <label forhtml="blog-date">Width</label>
    <input defaultValue={inputs.width} name="width" onChange={handleChange} type="number" id="width" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Height</label>
    <input defaultValue={inputs.height} name="height" onChange={handleChange} type="number" id="height" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Depth</label>
    <input defaultValue={inputs.depth} name="depth" onChange={handleChange} type="number" id="depth" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">location</label>
    <input defaultValue={inputs.location} name="location" onChange={handleChange} type="text" id="location" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Note</label>
    <input defaultValue={inputs.note} name="note" onChange={handleChange} type="text" id="note" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Warehouseblockadd