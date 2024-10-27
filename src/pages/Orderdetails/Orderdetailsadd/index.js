import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Orderdetailsadd() {
  const [inputs, setInputs] = useState({ id: '', item_id: '', item_origin: '', qty: '', amount: ''});
  const[Item, setCountry] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/Orderdetails/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const ItemResponse = await axios.get(`${process.env.REACT_APP_API_URL}/Item`);
            setCountry(ItemResponse.data.data);
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
                apiurl =`/Orderdetails/edit/${inputs.id}`;
            } else {
                apiurl =`/Orderdetails/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/Orderdetails')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Details</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

    <div className="form-group row">
    <label htmlFor="fname" className=" ">Country</label>
        
    {Item.length > 0 && 
        <select className="form-control" id="item_id" name='item_id' defaultValue={inputs.item_id} onChange={handleChange}>
            <option value="">Select Item</option>
            {Item.map((d, key) =>
                <option value={d.id}>{d.name}</option>
            )}
        </select>
        }
    </div>

    <div className="form-group">
        <label forhtml="blog-date">Item Origin</label>
        <input defaultValue={inputs.item_origin} name="item_origin" onChange={handleChange} type="text" id="item_origin" className="form-control" required />
    </div>

    <div className="form-group">
        <label forhtml="blog-date">Quantity</label>
        <input defaultValue={inputs.qty} name="qty" onChange={handleChange} type="text" id="qty" className="form-control" required />
    </div>

    <div className="form-group">
        <label forhtml="blog-date">Amount</label>
        <input defaultValue={inputs.amount} name="amount" onChange={handleChange} type="text" id="amount" className="form-control" required />
    </div>

    <button type="submit" class="btn btn-primary">Create</button>
    </form>
    </div>

    </AdminLayout>
  )
    }

export default Orderdetailsadd