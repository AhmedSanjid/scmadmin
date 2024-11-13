import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Cargotrackadd() {
  const [inputs, setInputs] = useState({ id: '', order_id:'', status: '', note: '', location:'', location_time:'', lat_id:'', long_id:'', recived_by:'', warehouse_id:'', warehouse_block_id:''});
  const[warehouse, setWarehouse] = useState([]);
  const[warehouse_block, setWarehouseBlock] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/cargotrack/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
        try {
            const warehouseResponse = await axios.get(`${process.env.REACT_APP_API_URL}/warehouse`);
            const warehouseblockResponse = await axios.get(`${process.env.REACT_APP_API_URL}/warehouseblock`);
            setWarehouse(warehouseResponse.data.data);
            setWarehouseBlock(warehouseblockResponse.data.data);
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
                apiurl =`/cargotrack/edit/${inputs.id}`;
            } else {
                apiurl =`/cargotrack/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/cargotrack')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div class="container mt-5">
    <h2 class="text-center mb-4">New Info</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>

<div className="form-group">
    <label forhtml="blog-date">Order Number</label>
    <input defaultValue={inputs.order_id} name="order_id" onChange={handleChange} type="text" id="order_id" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Location</label>
    <input defaultValue={inputs.location} name="location" onChange={handleChange} type="text" id="location" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Date/Time</label>
    <input defaultValue={inputs.location_time} name="location_time" onChange={handleChange} type="date" id="location_time" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Reciver</label>
    <input defaultValue={inputs.recived_by} name="recived_by" onChange={handleChange} type="text" id="recived_by" className="form-control" required />
</div>

<div className="form-group row">
            <label htmlFor="fname" className=" ">Warehouse</label>  
                {warehouse.length > 0 && 
                    <select className="form-control" id="warehouse_id" name='warehouse_id' defaultValue={inputs.warehouse_id} onChange={handleChange}>
                        <option value="">Warehouse</option>
                        {warehouse.map((d, key) =>
                        <option value={d.id}>{d.name}</option>
                        )}
                    </select>
                }
        </div>

        <div className="form-group row">
            <label htmlFor="fname" className=" ">Warehouse Block</label>    
            {warehouse_block.length > 0 && 
                    <select className="form-control" id="warehouse_block_id" name='warehouse_block_id' defaultValue={inputs.warehouse_block_id} onChange={handleChange}>
                        <option value="">Warehouse Block</option>
                            {warehouse_block.map((d, key) =>
                                <option value={d.id}>{d.name}</option>
                            )}
                    </select>
                    }
        </div>

<div className="form-group">
    <label forhtml="blog-date">Status</label>
    <input defaultValue={inputs.status} name="status" onChange={handleChange} type="text" id="status" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Note</label>
    <input defaultValue={inputs.note} name="note" onChange={handleChange} type="text" id="note" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Latitude</label>
    <input defaultValue={inputs.lat_id} name="lat_id" onChange={handleChange} type="text" id="lat_id" className="form-control" required />
</div>

<div className="form-group">
    <label forhtml="blog-date">Longitude </label>
    <input defaultValue={inputs.long_id} name="long_id" onChange={handleChange} type="text" id="long_id" className="form-control" required />
</div>

<button type="submit" class="btn btn-primary">Create</button>
  </form>
  </div>

    </AdminLayout>
  )
}

export default Cargotrackadd