import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Staffadd() {
  const [inputs, setInputs] = useState({ id: '', name: '', title:'', contact_number:'', address:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Staff/${id}`).then(function (response) {
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
                apiurl =`/Staff/edit/${inputs.id}`;
            } else {
                apiurl =`/Staff/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Staff')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
    <div className="container mt-5">
    <h2 className="text-center mb-4">New Staff</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Tilte</label>
    <input defaultValue={inputs.title} name="title" onChange={handleChange} type="text" id="title" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Contact Number</label>
    <input defaultValue={inputs.contact_number} name="contact_number" onChange={handleChange} type="text" id="contact_number" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Address</label>
    <input defaultValue={inputs.address} name="address" onChange={handleChange} type="text" id="address" className="form-control" required />
</div>

<button type="submit" className="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Staffadd