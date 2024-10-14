import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Pay() {
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
    <h2 class="text-center mb-4">Accounts Receivable</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <Link to={'/'} className='btn btn-secondary float-end' >Edit</Link>
    <table class="table table-striped table-bordered table-hover">
        <thead class="table-info">
            <tr>
                <th>Transaction ID</th>
                <th>Company Name</th>
                <th>LC Bank Name</th>
                <th>Date</th>
                <th>Office Address</th>
                <th>Contact Number</th>
                <th>Dues Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Toyota Motors</td>
                <td>Mitsubishi UFJ Bank</td>
                <td>2023-09-12</td>
                <td>1-1, Chuo-ku, Tokyo, Japan</td>
                <td>+81-3-1234-5678</td>
                <td>$5,000,000</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Samsung Electronics</td>
                <td>KB Kookmin Bank</td>
                <td>2023-09-20</td>
                <td>129 Samsung-ro, Seoul, South Korea</td>
                <td>+82-2-1234-5678</td>
                <td>$4,800,000</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Tata Motors</td>
                <td>State Bank of India</td>
                <td>2023-08-15</td>
                <td>24 Homi Modi Street, Mumbai, India</td>
                <td>+91-22-1234-5678</td>
                <td>$3,750,000</td>
            </tr>
            <tr>
                <td>004</td>
                <td>Huawei</td>
                <td>Bank of China</td>
                <td>2023-07-05</td>
                <td>156 Donghua Road, Shenzhen, China</td>
                <td>+86-755-1234-5678</td>
                <td>$7,200,000</td>
            </tr>
            <tr>
                <td>005</td>
                <td>Ford Motors</td>
                <td>Wells Fargo Bank</td>
                <td>2023-06-11</td>
                <td>300 Renaissance Drive, Detroit, USA</td>
                <td>+1-313-1234-5678</td>
                <td>$6,300,000</td>
            </tr>
            <tr>
                <td>006</td>
                <td>LG Electronics</td>
                <td>Shinhan Bank</td>
                <td>2023-05-22</td>
                <td>128 Yeoui-daero, Seoul, South Korea</td>
                <td>+82-2-1234-9876</td>
                <td>$2,900,000</td>
            </tr>
            <tr>
                <td>007</td>
                <td>Hyundai Motors</td>
                <td>Korea Development Bank</td>
                <td>2023-04-09</td>
                <td>231 Yangjae-dong, Seoul, South Korea</td>
                <td>+82-2-5678-1234</td>
                <td>$5,500,000</td>
            </tr>
            <tr>
                <td>008</td>
                <td>Infosys</td>
                <td>ICICI Bank</td>
                <td>2023-03-14</td>
                <td>Electronics City, Bangalore, India</td>
                <td>+91-80-5678-1234</td>
                <td>$3,250,000</td>
            </tr>
            <tr>
                <td>009</td>
                <td>Sony Corporation</td>
                <td>Sumitomo Mitsui Bank</td>
                <td>2023-02-28</td>
                <td>1-7-1 Konan, Minato-ku, Tokyo, Japan</td>
                <td>+81-3-5678-1234</td>
                <td>$8,400,000</td>
            </tr>
            <tr>
                <td>010</td>
                <td>Alibaba Group</td>
                <td>China Merchants Bank</td>
                <td>2023-01-11</td>
                <td>969 West Wenyi Road, Hangzhou, China</td>
                <td>+86-571-1234-5678</td>
                <td>$9,100,000</td>
            </tr>
            <tr>
                <td>011</td>
                <td>Microsoft</td>
                <td>Bank of America</td>
                <td>2022-12-12</td>
                <td>1 Microsoft Way, Redmond, USA</td>
                <td>+1-425-1234-5678</td>
                <td>$15,500,000</td>
            </tr>
            <tr>
                <td>012</td>
                <td>Amazon</td>
                <td>JPMorgan Chase</td>
                <td>2022-11-15</td>
                <td>410 Terry Ave N, Seattle, USA</td>
                <td>+1-206-1234-5678</td>
                <td>$10,200,000</td>
            </tr>
            <tr>
                <td>013</td>
                <td>Unilever</td>
                <td>HSBC Bank</td>
                <td>2022-10-25</td>
                <td>100 Victoria Embankment, London, UK</td>
                <td>+44-20-1234-5678</td>
                <td>$7,500,000</td>
            </tr>
            <tr>
                <td>014</td>
                <td>Pfizer</td>
                <td>Citibank</td>
                <td>2022-09-18</td>
                <td>235 East 42nd Street, New York, USA</td>
                <td>+1-212-1234-5678</td>
                <td>$8,750,000</td>
            </tr>
            <tr>
                <td>015</td>
                <td>BASF SE</td>
                <td>Deutsche Bank</td>
                <td>2022-08-01</td>
                <td>Carl-Bosch-Str. 38, Ludwigshafen, Germany</td>
                <td>+49-621-1234-5678</td>
                <td>$12,300,000</td>
            </tr>
            <tr>
                <td>016</td>
                <td>HSBC Holdings</td>
                <td>HSBC Bank</td>
                <td>2022-07-17</td>
                <td>8 Canada Square, London, UK</td>
                <td>+44-20-1234-5678</td>
                <td>$11,750,000</td>
            </tr>
            <tr>
                <td>017</td>
                <td>Johnson & Johnson</td>
                <td>Goldman Sachs</td>
                <td>2022-06-10</td>
                <td>One Johnson & Johnson Plaza, New Brunswick, USA</td>
                <td>+1-732-1234-5678</td>
                <td>$13,950,000</td>
            </tr>
            <tr>
                <td>018</td>
                <td>UPS (United Parcel Service)</td>
                <td>SunTrust Bank</td>
                <td>2022-05-15</td>
                <td>55 Glenlake Parkway NE, Atlanta, USA</td>
                <td>+1-404-1234-5678</td>
                <td>$9,200,000</td>
            </tr>
            <tr>
                <td>019</td>
                <td>Procter & Gamble</td>
                <td>Wells Fargo Bank</td>
                <td>2022-04-09</td>
                <td>1 Procter & Gamble Plaza, Cincinnati, USA</td>
                <td>+1-513-1234-5678</td>
                <td>$6,450,000</td>
            </tr>
            <tr>
                <td>020</td>
                <td>Coca-Cola</td>
                <td>BBVA Bank</td>
                <td>2022-03-25</td>
                <td>1 Coca-Cola Plaza, Atlanta, USA</td>
                <td>+1-404-1234-5678</td>
                <td>$10,500,000</td>
            </tr>
        </tbody>
    </table>
</div>

    </AdminLayout>
  )
}

export default Pay