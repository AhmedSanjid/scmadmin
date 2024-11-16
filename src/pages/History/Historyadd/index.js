import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Historyadd() {
  const [inputs, setInputs] = useState({ id: '', company_name: '', email: '', shipment_date: '', cargo_type: '', shipment_country:'', cost:'', shipment_status:'', tracking_number:''});
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/history/${id}`).then(function (response) {
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
                apiurl =`/history/edit/${inputs.id}`;
            } else {
                apiurl =`/history/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/history')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  
  <div className="container mt-5">
    <h2 className="text-center mb-4">Edit History</h2>
    <form className="form form-vertical" onSubmit={handleSubmit}>
        
        <div className="form-group">
            <label htmlFor="company_name">Company Name</label>
            <input 
                defaultValue={inputs.company_name} 
                name="company_name" 
                onChange={handleChange} 
                type="text" 
                id="company_name" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                defaultValue={inputs.email} 
                name="email" 
                onChange={handleChange} 
                type="email" 
                id="email" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="shipment_date">Shipment Date</label>
            <input 
                defaultValue={inputs.shipment_date} 
                name="shipment_date" 
                onChange={handleChange} 
                type="date" 
                id="shipment_date" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="cargo_type">Cargo Type</label>
            <input 
                defaultValue={inputs.cargo_type} 
                name="cargo_type" 
                onChange={handleChange} 
                type="text" 
                id="cargo_type" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="shipment_country">Shipment Country</label>
            <input 
                defaultValue={inputs.shipment_country} 
                name="shipment_country" 
                onChange={handleChange} 
                type="text" 
                id="shipment_country" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="warehouse_name">Warehouse Name</label>
            <input 
                defaultValue={inputs.warehouse_name} 
                name="warehouse_name" 
                onChange={handleChange} 
                type="text" 
                id="warehouse_name" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input 
                defaultValue={inputs.cost} 
                name="cost" 
                onChange={handleChange} 
                type="number" 
                id="cost" 
                className="form-control" 
                step="0.01" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="shipment_status">Shipment Status</label>
            <input 
                defaultValue={inputs.shipment_status} 
                name="shipment_status" 
                onChange={handleChange} 
                type="text" 
                id="shipment_status" 
                className="form-control" 
                required 
            />
        </div>

        <div className="form-group">
            <label htmlFor="tracking_number">Tracking Number</label>
            <input 
                defaultValue={inputs.tracking_number} 
                name="tracking_number" 
                onChange={handleChange} 
                type="text" 
                id="tracking_number" 
                className="form-control" 
                required 
            />
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
    </form>
</div>
    </AdminLayout>
  )
}

export default Historyadd