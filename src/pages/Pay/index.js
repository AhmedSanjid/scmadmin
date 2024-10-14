import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Dues() {
  const[data, setData]=useState([]);
    useEffect(() => {
        getDatas();
    }, []);

    function getDatas() {
        axios.get(`${process.env.REACT_APP_API_URL}/insurance/`).then(function(response) {
            setData(response.data.data);
        });
    }
    const deleteData = (id) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/insurance/${id}`).then(function(response){
            getDatas();
        });
    }
  return (
    <AdminLayout>

<div class="container mt-5">
        <h2 class="mb-4">Accounts Payable</h2>
        <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <Link to={'/'} className='btn btn-secondary float-end' >Edit</Link>
        <table class="table table-bordered table-striped table-hover">
            <thead class="table-info">
                <tr>
                    <th>#</th>
                    <th>Company Name</th>
                    <th>Transportation Company</th>
                    <th>Warehouse Name</th>
                    <th>Labor Location</th>
                    <th>Warehouse Cost ($)</th>
                    <th>Transportation Cost ($)</th>
                    <th>Labor Cost ($)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Company A</td>
                    <td>TransCo</td>
                    <td>Warehouse A</td>
                    <td>Labor Camp A</td>
                    <td>50000</td>
                    <td>30000</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Company B</td>
                    <td>Transport Solutions</td>
                    <td>Warehouse B</td>
                    <td>Labor Camp B</td>
                    <td>40000</td>
                    <td>25000</td>
                    <td>15000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Company C</td>
                    <td>Quick Freight</td>
                    <td>Warehouse C</td>
                    <td>Labor Camp C</td>
                    <td>60000</td>
                    <td>35000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Company D</td>
                    <td>Speedy Logistics</td>
                    <td>Warehouse D</td>
                    <td>Labor Camp D</td>
                    <td>45000</td>
                    <td>22000</td>
                    <td>18000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Company E</td>
                    <td>Freight Masters</td>
                    <td>Warehouse E</td>
                    <td>Labor Camp E</td>
                    <td>30000</td>
                    <td>15000</td>
                    <td>12000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Company F</td>
                    <td>Global Transport</td>
                    <td>Warehouse F</td>
                    <td>Labor Camp F</td>
                    <td>70000</td>
                    <td>37000</td>
                    <td>26000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Company G</td>
                    <td>Express Haulage</td>
                    <td>Warehouse G</td>
                    <td>Labor Camp G</td>
                    <td>80000</td>
                    <td>45000</td>
                    <td>32000</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Company H</td>
                    <td>Elite Transport</td>
                    <td>Warehouse H</td>
                    <td>Labor Camp H</td>
                    <td>75000</td>
                    <td>42000</td>
                    <td>30000</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Company I</td>
                    <td>Fast Freight</td>
                    <td>Warehouse I</td>
                    <td>Labor Camp I</td>
                    <td>55000</td>
                    <td>28000</td>
                    <td>19000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Company J</td>
                    <td>Freight Forwarders</td>
                    <td>Warehouse J</td>
                    <td>Labor Camp J</td>
                    <td>65000</td>
                    <td>35000</td>
                    <td>24000</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Company K</td>
                    <td>Dynamic Transport</td>
                    <td>Warehouse K</td>
                    <td>Labor Camp K</td>
                    <td>72000</td>
                    <td>40000</td>
                    <td>31000</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Company L</td>
                    <td>Transport World</td>
                    <td>Warehouse L</td>
                    <td>Labor Camp L</td>
                    <td>69000</td>
                    <td>39000</td>
                    <td>29000</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Company M</td>
                    <td>Ship & Freight</td>
                    <td>Warehouse M</td>
                    <td>Labor Camp M</td>
                    <td>82000</td>
                    <td>46000</td>
                    <td>35000</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Company N</td>
                    <td>Transport Systems</td>
                    <td>Warehouse N</td>
                    <td>Labor Camp N</td>
                    <td>88000</td>
                    <td>48000</td>
                    <td>40000</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Company O</td>
                    <td>Allied Logistics</td>
                    <td>Warehouse O</td>
                    <td>Labor Camp O</td>
                    <td>75000</td>
                    <td>45000</td>
                    <td>32000</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Company P</td>
                    <td>Transport Services</td>
                    <td>Warehouse P</td>
                    <td>Labor Camp P</td>
                    <td>60000</td>
                    <td>35000</td>
                    <td>25000</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Company Q</td>
                    <td>Swift Transport</td>
                    <td>Warehouse Q</td>
                    <td>Labor Camp Q</td>
                    <td>90000</td>
                    <td>50000</td>
                    <td>42000</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Company R</td>
                    <td>Reliable Freight</td>
                    <td>Warehouse R</td>
                    <td>Labor Camp R</td>
                    <td>95000</td>
                    <td>52000</td>
                    <td>44000</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Company S</td>
                    <td>Premium Transport</td>
                    <td>Warehouse S</td>
                    <td>Labor Camp S</td>
                    <td>78000</td>
                    <td>48000</td>
                    <td>37000</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>Company T</td>
                    <td>Transport Express</td>
                    <td>Warehouse T</td>
                    <td>Labor Camp T</td>
                    <td>81000</td>
                    <td>49000</td>
                    <td>38000</td>
                </tr>
                <tr>
                    <td>21</td>
                    <td>Company U</td>
                    <td>Efficient Logistics</td>
                    <td>Warehouse U</td>
                    <td>Labor Camp U</td>
                    <td>73000</td>
                    <td>42000</td>
                    <td>36000</td>
                </tr>
                <tr>
                    <td>22</td>
                    <td>Company V</td>
                    <td>Logistics Hub</td>
                    <td>Warehouse V</td>
                    <td>Labor Camp V</td>
                    <td>84000</td>
                    <td>47000</td>
                    <td>40000</td>
                </tr>
                <tr>
                    <td>23</td>
                    <td>Company W</td>
                    <td>Transport Link</td>
                    <td>Warehouse W</td>
                    <td>Labor Camp W</td>
                    <td>87000</td>
                    <td>49000</td>
                    <td>43000</td>
                </tr>
                <tr>
                    <td>24</td>
                    <td>Company X</td>
                    <td>Transit Solutions</td>
                    <td>Warehouse X</td>
                    <td>Labor Camp X</td>
                    <td>94000</td>
                    <td>51000</td>
                    <td>45000</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>Company Y</td>
                    <td>Transport Innovations</td>
                    <td>Warehouse Y</td>
                    <td>Labor Camp Y</td>
                    <td>92000</td>
                    <td>50000</td>
                    <td>44000</td>
                </tr>
                <tr>
                    <td>26</td>
                    <td>Company Z</td>
                    <td>Integrated Transport</td>
                    <td>Warehouse Z</td>
                    <td>Labor Camp Z</td>
                    <td>89000</td>
                    <td>49000</td>
                    <td>42000</td>
                </tr>
                <tr>
                    <td>27</td>
                    <td>Company AA</td>
                    <td>National Freight</td>
                    <td>Warehouse AA</td>
                    <td>Labor Camp AA</td>
                    <td>90000</td>
                    <td>48000</td>
                    <td>41000</td>
                </tr>
                <tr>
                    <td>28</td>
                    <td>Company AB</td>
                    <td>Metro Logistics</td>
                    <td>Warehouse AB</td>
                    <td>Labor Camp AB</td>
                    <td>95000</td>
                    <td>51000</td>
                    <td>43000</td>
                </tr>
                <tr>
                    <td>29</td>
                    <td>Company AC</td>
                    <td>Skyline Transport</td>
                    <td>Warehouse AC</td>
                    <td>Labor Camp AC</td>
                    <td>97000</td>
                    <td>52000</td>
                    <td>44000</td>
                </tr>
                <tr>
                    <td>30</td>
                    <td>Company AD</td>
                    <td>Vision Freight</td>
                    <td>Warehouse AD</td>
                    <td>Labor Camp AD</td>
                    <td>100000</td>
                    <td>55000</td>
                    <td>46000</td>
                </tr>
            </tbody>
        </table>
    </div>

    </AdminLayout>
  )
}

export default Dues