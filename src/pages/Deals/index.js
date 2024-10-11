import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useLocation, Link} from 'react-router-dom';

function Deals() {
  const activeMenu = (e) => {
    document.querySelectorAll('.submenu').forEach(
        function (e) {
            e.classList.remove('active');
        }
    )
    const childElement = e.target.parentElement.querySelector('.submenu');
    if (childElement && childElement.classList.contains('submenu')) {
        childElement.classList.add('active');
    }
}

const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
  return (
    <AdminLayout>

<div class="container my-4">
    <h2 class="text-center">Company Dealings</h2>
    <table class="table table-striped table-bordered table-hover">
      <thead class="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Transaction Date</th>
          <th scope="col">Company Name</th>
          <th scope="col">Dealing Person</th>
          <th scope="col">Bank Name</th>
          <th scope="col">Amount (USD)</th>
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <th scope="row">1</th>
          <td>2023-09-12</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Toyota")}`}>
          <Link to="/Toyota" className="sidebar-link">Toyota Motor Corporation</Link></p>
          <td>Akira Tanaka</td>
          <td>Mitsubishi UFJ Financial Group</td>
          <td>$5,000,000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2022-05-15</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Pfizer")}`}>
          <Link to="/Pfizer" className="sidebar-link">Pfizer Inc</Link></p>
          <td>Emily Carter</td>
          <td>Citibank</td>
          <td>$8,750,000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>2021-11-23</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Amazon")}`}>
          <Link to="/Amazon" className="sidebar-link">Amazon</Link></p>
          <td>Michael Johnson</td>
          <td>JPMorgan Chase & Co.</td>
          <td>$10,200,000</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>2023-07-18</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Unilever")}`}>
          <Link to="/Unilever" className="sidebar-link">Unilever</Link></p>
          <td>Sophie Jones</td>
          <td>HSBC</td>
          <td>$7,500,000</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>2020-04-09</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Microsoft")}`}>
          <Link to="/Microsoft" className="sidebar-link">Microsoft</Link></p>
          <td>Lisa Brown</td>
          <td>Bank of America</td>
          <td>$15,800,000</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>2019-12-30</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/BASF")}`}>
          <Link to="/BASF" className="sidebar-link">BASF SE</Link></p>
          <td>Clara Mueller</td>
          <td>Deutsche Bank</td>
          <td>$12,300,000</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>2021-08-11</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Ford")}`}>
          <Link to="/Ford" className="sidebar-link">Ford Motor Company</Link></p>
          <td>John Davis</td>
          <td>Wells Fargo</td>
          <td>$6,450,000</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>2022-10-25</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/HSBC")}`}>
          <Link to="/HSBC" className="sidebar-link">HSBC Holdings plc</Link></p>
          <td>Anna Thompson</td>
          <td>HSBC</td>
          <td>$11,750,000</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>2023-06-01</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Johnson ")}`}>
          <Link to="/Johnson " className="sidebar-link">Johnson & Johnson</Link></p>
          <td>Steven Baker</td>
          <td>Goldman Sachs</td>
          <td>$13,950,000</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>2021-03-19</td>
          <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/UPS ")}`}>
          <Link to="/UPS " className="sidebar-link">United Parcel Service</Link></p>
          <td>Henry Clark</td>
          <td>SunTrust Bank</td>
          <td>$9,200,000</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>2020-02-28</td>
          <td>Apple Inc.</td>
          <td>David Williams</td>
          <td>Wells Fargo</td>
          <td>$20,500,000</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>2023-04-14</td>
          <td>Tesla, Inc.</td>
          <td>Elena Rodriguez</td>
          <td>Morgan Stanley</td>
          <td>$18,900,000</td>
        </tr>
        <tr>
          <th scope="row">13</th>
          <td>2021-07-26</td>
          <td>Coca-Cola Company</td>
          <td>Mark Peterson</td>
          <td>Citibank</td>
          <td>$7,800,000</td>
        </tr>
        <tr>
          <th scope="row">14</th>
          <td>2019-09-13</td>
          <td>Intel Corporation</td>
          <td>Jane Scott</td>
          <td>Barclays</td>
          <td>$12,650,000</td>
        </tr>
        <tr>
          <th scope="row">15</th>
          <td>2020-10-08</td>
          <td>Shell plc</td>
          <td>Patrick James</td>
          <td>HSBC</td>
          <td>$22,750,000</td>
        </tr>
        
        <tr>
          <th scope="row">16</th>
          <td>2022-06-11</td>
          <td>ExxonMobil</td>
          <td>Robert Harris</td>
          <td>JPMorgan Chase</td>
          <td>$35,000,000</td>
        </tr>
        <tr>
          <th scope="row">17</th>
          <td>2021-12-04</td>
          <td>Siemens AG</td>
          <td>Johann Bauer</td>
          <td>Deutsche Bank</td>
          <td>$13,500,000</td>
        </tr>
        <tr>
          <th scope="row">18</th>
          <td>2023-05-09</td>
          <td>PepsiCo</td>
          <td>Emma Walker</td>
          <td>Bank of America</td>
          <td>$18,250,000</td>
        </tr>
        <tr>
          <th scope="row">19</th>
          <td>2020-11-02</td>
          <td>Procter & Gamble</td>
          <td>John Walker</td>
          <td>HSBC</td>
          <td>$14,500,000</td>
        </tr>
        <tr>
          <th scope="row">20</th>
          <td>2021-07-18</td>
          <td>Volkswagen AG</td>
          <td>Martin Schmidt</td>
          <td>Deutsche Bank</td>
          <td>$21,700,000</td>
        </tr>
        <tr>
          <th scope="row">21</th>
          <td>2022-08-25</td>
          <td>Facebook (Meta)</td>
          <td>Mark Diaz</td>
          <td>Wells Fargo</td>
          <td>$25,600,000</td>
        </tr>
        <tr>
          <th scope="row">22</th>
          <td>2020-09-03</td>
          <td>Nike Inc.</td>
          <td>Sarah Green</td>
          <td>Citibank</td>
          <td>$7,100,000</td>
        </tr>
        <tr>
          <th scope="row">23</th>
          <td>2021-03-24</td>
          <td>Samsung Electronics</td>
          <td>Jin Park</td>
          <td>Korea Development Bank</td>
          <td>$16,500,000</td>
        </tr>
        <tr>
          <th scope="row">24</th>
          <td>2022-10-11</td>
          <td>Honda Motor Co.</td>
          <td>Kenichi Suzuki</td>
          <td>Mitsubishi UFJ Financial Group</td>
          <td>$11,850,000</td>
        </tr>
        <tr>
          <th scope="row">25</th>
          <td>2019-12-18</td>
          <td>Nestlé</td>
          <td>Linda Garcia</td>
          <td>Credit Suisse</td>
          <td>$23,750,000</td>
        </tr>
        <tr>
          <th scope="row">26</th>
          <td>2023-06-28</td>
          <td>Chevron Corporation</td>
          <td>David Baker</td>
          <td>Goldman Sachs</td>
          <td>$19,450,000</td>
        </tr>
        <tr>
          <th scope="row">27</th>
          <td>2020-01-15</td>
          <td>IBM</td>
          <td>Karen White</td>
          <td>JPMorgan Chase</td>
          <td>$8,950,000</td>
        </tr>
        <tr>
          <th scope="row">28</th>
          <td>2022-02-22</td>
          <td>BP plc</td>
          <td>Peter Johnson</td>
          <td>HSBC</td>
          <td>$30,100,000</td>
        </tr>
        <tr>
          <th scope="row">29</th>
          <td>2021-04-29</td>
          <td>AT&T Inc.</td>
          <td>Chris Thompson</td>
          <td>Wells Fargo</td>
          <td>$9,400,000</td>
        </tr>
        <tr>
          <th scope="row">30</th>
          <td>2019-10-21</td>
          <td>Boeing</td>
          <td>Mike Williams</td>
          <td>Bank of America</td>
          <td>$18,300,000</td>
        </tr>
        <tr>
          <th scope="row">31</th>
          <td>2022-12-09</td>
          <td>Volkswagen AG</td>
          <td>Thomas Klein</td>
          <td>Deutsche Bank</td>
          <td>$11,200,000</td>
        </tr>
        <tr>
          <th scope="row">32</th>
          <td>2021-06-03</td>
          <td>Novartis</td>
          <td>Sarah Nelson</td>
          <td>Credit Suisse</td>
          <td>$14,800,000</td>
        </tr>
        <tr>
          <th scope="row">33</th>
          <td>2022-07-14</td>
          <td>Samsung Electronics</td>
          <td>Minho Lee</td>
          <td>Korea Development Bank</td>
          <td>$17,600,000</td>
        </tr>
        <tr>
          <th scope="row">34</th>
          <td>2020-05-08</td>
          <td>BMW Group</td>
          <td>Christian Wolf</td>
          <td>Deutsche Bank</td>
          <td>$24,900,000</td>
        </tr>
        <tr>
          <th scope="row">35</th>
          <td>2021-09-15</td>
          <td>Cisco Systems</td>
          <td>Mary Anderson</td>
          <td>Wells Fargo</td>
          <td>$9,750,000</td>
        </tr>
        <tr>
          <th scope="row">36</th>
          <td>2023-02-01</td>
          <td>Verizon Communications</td>
          <td>Paul Roberts</td>
          <td>Bank of America</td>
          <td>$16,200,000</td>
        </tr>
        <tr>
          <th scope="row">37</th>
          <td>2020-08-16</td>
          <td>Huawei Technologies</td>
          <td>Li Zhang</td>
          <td>Bank of China</td>
          <td>$22,100,000</td>
        </tr>
        <tr>
          <th scope="row">38</th>
          <td>2021-11-25</td>
          <td>Alphabet (Google)</td>
          <td>Jane Young</td>
          <td>JPMorgan Chase</td>
          <td>$28,500,000</td>
        </tr>
        <tr>
          <th scope="row">39</th>
          <td>2023-07-09</td>
          <td>Procter & Gamble</td>
          <td>Steven Adams</td>
          <td>HSBC</td>
          <td>$17,500,000</td>
        </tr>
        <tr>
          <th scope="row">40</th>
          <td>2022-05-20</td>
          <td>General Electric</td>
          <td>Natalie Cooper</td>
          <td>Bank of America</td>
          <td>$21,000,000</td>
        </tr>
      
      </tbody>
    </table>
  </div>
  
    </AdminLayout>
  )
}

export default Deals