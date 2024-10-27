import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Stateadd() {
  const [inputs, setInputs] = useState({ id: '', country_id: '', name:''});
  const[country, setCountry] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/State/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const countryResponse = await axios.get(`${process.env.REACT_APP_API_URL}/Country`);
            setCountry(countryResponse.data.data);
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
                apiurl =`/State/edit/${inputs.id}`;
            } else {
                apiurl =`/State/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/State')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div className="container mt-5">
    <h2 className="text-center mb-4">Add State</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>



    <div className="form-group row">
    <label htmlFor="fname" className=" ">Country</label>
        
    {country.length > 0 && 
        <select className="form-control" id="country_id" name='country_id' defaultValue={inputs.country_id} onChange={handleChange}>
            <option value="">Select Country</option>
            {country.map((d, key) =>
                <option value={d.id}>{d.name}</option>
            )}
        </select>
        }
</div>

<div className="form-group">
    <label forhtml="blog-date">Name</label>
    <input defaultValue={inputs.name} name="name" onChange={handleChange} type="text" id="name" className="form-control" required />
</div>

<button type="submit" className="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Stateadd