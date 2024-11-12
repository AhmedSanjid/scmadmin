import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TableView() {
  const[data, setData]=useState([]);
  useEffect(() => {
      getDatas();
  }, []);

  function getDatas() {
      axios.get(`${process.env.REACT_APP_API_URL}/freights/`).then(function(response) {
          setData(response.data.data);
      });
  }
  const deleteData = (id) => {
      axios.delete(`${process.env.REACT_APP_API_URL}/freights/${id}`).then(function(response){
          getDatas();
      });
  }
  return (
  
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-success">
        <tr>
          <th>SL</th>
          <th>Company Name</th>
          <th>Shipment Type</th>
          <th>Item</th>
          <th>Pickup Location</th>
          <th>Total Quantity</th>
          <th>Pickup Date/Time</th>
          <th>Transport</th>
          <th>Delivery Location</th>
          <th>Delivery Date/Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {data && data.map((d, key) =>
        <tr key={d.id}>
            <td>{d.id}</td>
            <td>{d.customer?.company_name}</td>
            <td>{d.shipment_type}</td>
            <td>{d.item}</td>
            <td>{d.pickup_location}</td>
            <td>{d.total_qty}</td>
            <td>{d.pickup_time}</td>
            <td>{d.transporttype?.name}</td>
            <td>{d.delivery_location}</td>
            <td>{d.delivery_time}</td>
            <td>
                <Link to={`/freights/edit/${d.id}`} className='btn btn-secondary' >Edit</Link>
                <button type='button' onClick={() => deleteData(d.id)} className='btn btn-warning'>Delete</button>
                <button type='button' onClick={() => (d.id)} className='btn btn-success'>Approve</button>
            </td>
        </tr>
    )}
        </tbody>
    </table>
  
  )
}

export default TableView