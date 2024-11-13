import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Staffadd() {
  const [inputs, setInputs] = useState({ id: '', user_id: '', name:'', contact_no:'', address:'',email:'',designation:'' });
  const[user, setUser] = useState([]);
  const[roles, setroles] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Staff/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
        
    }

    const getRelational = async () => {
        try {
            const rResponse = await axios.get(`${process.env.REACT_APP_API_URL}/roles`);
            setroles(rResponse.data.data);
        } catch (error) {
            console.error("Error fetching relational data", error);
        }
    };

    useEffect(() => {
        if (id) {
            getDatas();
        }
        getRelational();
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

    <div className="form-group row">
        <label htmlFor="fname" className=" ">Role</label>
    
        {roles.length > 0 && 
            <select className="form-control" id="role_id" name='role_id' defaultValue={inputs.role_id} onChange={handleChange}>
                <option value="">Select role</option>
                {roles.map((d, key) =>
                    <option value={d.id}>{d.name}</option>
                )}
            </select>
        }
    </div>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Designation</label>
    <input defaultValue={inputs.designation} name="designation" onChange={handleChange} type="text" id="designation" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Contact Number</label>
    <input defaultValue={inputs.contact_no} name="contact_no" onChange={handleChange} type="text" id="contact_no" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Email</label>
    <input defaultValue={inputs.email} name="email" onChange={handleChange} type="text" id="email" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Address</label>
    <input defaultValue={inputs.address} name="address" onChange={handleChange} type="text" id="address" className="form-control" required />
</div>
<div className="form-group">
    <label forhtml="blog-date">Password</label>
    <input defaultValue={inputs.password} name="password" onChange={handleChange} type="text" id="password" className="form-control" required />
</div>

<button type="submit" className="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Staffadd