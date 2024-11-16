import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  function getDatas() {
    axios.get(`${process.env.REACT_APP_API_URL}/history/`).then(function(response) {
      setData(response.data.data);
    });
  }

  const deleteData = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/history/${id}`).then(function(response) {
      getDatas();
    });
  }

  return (
    <AdminLayout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Order History</h2>
        <Link to={'/history/add'} className='btn btn-primary float-end'>Add New</Link>
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-success">
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>Shipment Date</th>
              <th>Cargo Type</th>
              <th>Shipment Country</th>
              <th>Warehouses</th>
              <th>Cost</th>
              <th>Shipment Status</th>
              <th>Tracking Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((d, key) => (
              <tr key={d.id}>
                <td>{d.company_name}</td>
                <td>{d.email}</td>
                <td>{d.shipment_date}</td>
                <td>{d.cargo_type}</td>
                <td>{d.shipment_country}</td>
                <td>{d.warehouse_name}</td>
                <td>${typeof d.cost === 'number' ? d.cost.toFixed(2) : parseFloat(d.cost).toFixed(2)}</td>
                <td>{d.shipment_status}</td>
                <td>{d.tracking_number}</td>
                <td>
                  <Link to={`/history/edit/${d.id}`} className='btn btn-secondary'>Edit</Link>
                  <button type='button' onClick={() => deleteData(d.id)} className='btn btn-warning'>Delete</button>
                  <button type='button' onClick={() => (d.id)} className='btn btn-success'>Approve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default History;