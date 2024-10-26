import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Itemadd() {
  const [inputs, setInputs] = useState({ id: '', item_category_id: '', item_name: '', note:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Item/${id}`).then(function (response) {
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
                apiurl =`/Item/edit/${inputs.id}`;
            } else {
                apiurl =`/Item/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Item')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Item Category</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Item Category</label>
    <input defaultValue={inputs.item_category_id} name="item_category_id" onChange={handleChange} type="text" id="item_category_id" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Item Name</label>
    <input defaultValue={inputs.item_name} name="item_name" onChange={handleChange} type="text" id="item_name" className="form-control" required />
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

export default Itemadd