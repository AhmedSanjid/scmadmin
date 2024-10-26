import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Locationadd() {
  const [inputs, setInputs] = useState({ id: '', country_id: '', state_id:'', address: ''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Location/${id}`).then(function (response) {
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
                apiurl =`/Location/edit/${inputs.id}`;
            } else {
                apiurl =`/Location/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Location')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div className="container mt-5">
    <h2 className="text-center mb-4">New Locations</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Country Id</label>
    <input defaultValue={inputs.country_id} name="country_id" onChange={handleChange} type="text" id="country_id" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">State Id</label>
    <input defaultValue={inputs.state_id} name="state_id" onChange={handleChange} type="text" id="state_id" className="form-control" required />
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

export default Locationadd