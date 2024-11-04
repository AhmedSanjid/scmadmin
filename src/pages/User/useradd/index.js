import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Useradd() {
  const [inputs, setInputs] = useState({ id: '', name: '', email : '', role_id:'', password:''});

    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/user/${id}`).then(function (response) {
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
                apiurl =`/user/edit/${inputs.id}`;
            } else {
                apiurl =`/user/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/user')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New User</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Email</label>
    <input defaultValue={inputs.email} name="email" onChange={handleChange} type="text" id="email" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Role Id</label>
    <input defaultValue={inputs.role_id} name="role_id" onChange={handleChange} type="text" id="role_id" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Password</label>
    <input defaultValue={inputs.password} name="password" onChange={handleChange} type="text" id="password" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Useradd