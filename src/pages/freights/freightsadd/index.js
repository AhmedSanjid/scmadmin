import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Freightsadd() {
    const [inputs, setInputs] = useState({ id: '', customer_id: '', contact_no: '', shipment_type: '', pickup_time: '', delivery_time: '', total_qty: '', pickup_location: '', delivery_location: '', transport_type_id: ''});
  const[customer, setCustomer] = useState([]);
  const[transport_type, setTransportType] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/freights/${id}`).then(function (response) {
            setInputs(response.data.data);
        });
    }

    const getRelational = async () => {
      try {
          const customerResponse = await axios.get(`${process.env.REACT_APP_API_URL}/customer`);
          const TransporttypeResponse = await axios.get(`${process.env.REACT_APP_API_URL}/Transporttype`);
          setCustomer(customerResponse.data.data);
          setTransportType(TransporttypeResponse.data.data);
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
                apiurl =`/freights/edit/${inputs.id}`;
            } else {
                apiurl =`/freights/create`;
            }

            let response = await axios({
                method: 'post',
                responsiveType: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: inputs
            });
            navigate('/freights')
        }
        catch (e) {
            console.log(e);
          }
        }
  return (
    <AdminLayout>
  <form className="form form-vertical" onSubmit={handleSubmit}>
        
  <fieldset className="border p-4 mb-4">
    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="shipment_type" className="form-label">Shipment Type</label>
            <select defaultValue={inputs.shipment_type} onChange={handleChange} name="shipment_type" className="form-control">
                <option value="">Select One</option>
                <option value="Air Freight">Air Freight</option>
                <option value="Sailing Freight">Sailing Freight</option>
                <option value="Highway Freight">Highway Freight</option>
            </select>
        </div>

        <div className="col-md-6">
            <label htmlFor="customer_id" className="form-label">Company Name</label>
            {customer.length > 0 && (
                <select className="form-control" id="customer_id" name="customer_id" defaultValue={inputs.company_name} onChange={handleChange}>
                    <option value="">Select Company</option>
                    {customer.map((d, key) => (
                        <option key={key} value={d.id}>{d.company_name}</option>
                    ))}
                </select>
            )}
        </div>
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="pickup_location" className="form-label">Pickup Location</label>
            <input defaultValue={inputs.pickup_location} name="pickup_location" onChange={handleChange} type="text" id="pickup_location" className="form-control" required />
        </div>

        <div className="col-md-6">
            <label htmlFor="total_qty" className="form-label">Total Quantity</label>
            <input defaultValue={inputs.total_qty} name="total_qty" onChange={handleChange} type="text" id="total_qty" className="form-control" required />
        </div>
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="pickup_time" className="form-label">Pickup Date/Time</label>
            <input defaultValue={inputs.pickup_time} name="pickup_time" onChange={handleChange} type="datetime-local" id="pickup_time" className="form-control" required />
        </div>

        <div className="col-md-6">
            <label htmlFor="transport_type_id" className="form-label">Transport</label>
            {transport_type.length > 0 && (
                <select className="form-control" id="transport_type_id" name="transport_type_id" defaultValue={inputs.transport_type_id} onChange={handleChange}>
                    <option value="">Select Transport</option>
                    {transport_type.map((d, key) => (
                        <option key={key} value={d.id}>{d.name}</option>
                    ))}
                </select>
            )}
        </div>
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="delivery_location" className="form-label">Delivery Location</label>
            <input defaultValue={inputs.delivery_location} name="delivery_location" onChange={handleChange} type="text" id="delivery_location" className="form-control" required />
        </div>

        <div className="col-md-6">
            <label htmlFor="delivery_time" className="form-label">Delivery Date/Time</label>
            <input defaultValue={inputs.delivery_time} name="delivery_time" onChange={handleChange} type="datetime-local" id="delivery_time" className="form-control" required />
        </div>
    </div>
</fieldset>


<fieldset className="border p-4 mb-4">

    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="Item" className="form-label">Item</label>
            <div className="input-group">
                <input defaultValue={inputs.item} name="item" onChange={handleChange} type="text" id="item" className="form-control" required />
            </div>
        </div>
    </div>

    <div className="row mb-3">
        <div className="col-md-6">
            <label htmlFor="address" className="form-label">Address</label>
            <input defaultValue={inputs.address} name="address" onChange={handleChange} type="text" id="address" className="form-control" required />
        </div>
    </div>
</fieldset>
      
      <button type="submit" className="btn btn-success">Create</button>
  </form>

    </AdminLayout>
  )
}

export default Freightsadd