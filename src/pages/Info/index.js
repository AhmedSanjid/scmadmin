import React from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';
function Info() {
  return (
    <AdminLayout>

<div class="container my-4">
    <h2 class="text-center">Preferred Vendor</h2>
    <Link to={'/'} className='btn btn-primary float-end' >Add New</Link>
    <Link to={'/'} className='btn btn-secondary float-end' >Edit</Link>
    <table class="table table-striped table-bordered">
      <thead class="table-info">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Company Name</th>
          <th scope="col">Category</th>
          <th scope="col">Location</th>
          <th scope="col">Map Link (OpenStreetMap)</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
      
        <tr>
          <th scope="row">1</th>
          <td>Toyota Motor Corporation</td>
          <td>Automotive</td>
          <td>Toyota City, Japan</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=35.0805&mlon=137.1822#map=16/35.0805/137.1822" target="_blank`">OpenStreetMap</a></td>
          <td>World's largest automobile manufacturer producing cars, trucks, and hybrid vehicles.</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Ford Motor Company</td>
          <td>Automotive</td>
          <td>Dearborn, Michigan, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=42.3223&mlon=-83.1763#map=16/42.3223/-83.1763" target="_blank`">OpenStreetMap</a></td>
          <td>Global leader in automotive design, engineering, and manufacturing.</td>
        </tr>

        
        <tr>
          <th scope="row">3</th>
          <td>Pfizer Inc.</td>
          <td>Pharmaceutical</td>
          <td>New York City, New York, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=40.7547&mlon=-73.9684#map=16/40.7547/-73.9684" target="_blank`">OpenStreetMap</a></td>
          <td>Multinational pharmaceutical and biotechnology corporation.</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Johnson & Johnson</td>
          <td>Pharmaceutical/Healthcare</td>
          <td>New Brunswick, New Jersey, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=40.4976&mlon=-74.4469#map=16/40.4976/-74.4469" target="_blank`">OpenStreetMap</a></td>
          <td>Global healthcare company focusing on medical devices, pharmaceuticals, and consumer health products.</td>
        </tr>

        
        <tr>
          <th scope="row">5</th>
          <td>Walmart Inc.</td>
          <td>Retail</td>
          <td>Bentonville, Arkansas, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=36.3739&mlon=-94.2083#map=16/36.3739/-94.2083" target="_blank`">OpenStreetMap</a></td>
          <td>Largest retailer globally, offering a wide range of products.</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Amazon</td>
          <td>Retail/Tech</td>
          <td>Seattle, Washington, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=47.6221&mlon=-122.3366#map=16/47.6221/-122.3366" target="_blank`">OpenStreetMap</a></td>
          <td>Leading e-commerce and cloud computing company with global operations.</td>
        </tr>

        
        <tr>
          <th scope="row">7</th>
          <td>H&M Group</td>
          <td>Garments</td>
          <td>Stockholm, Sweden</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=59.3331&mlon=18.0658#map=16/59.3331/18.0658" target="_blank`">OpenStreetMap</a></td>
          <td>Global retailer specializing in fast fashion and clothing.</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Zara (Inditex Group)</td>
          <td>Garments</td>
          <td>Arteixo, Spain</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=43.3232&mlon=-8.5093#map=16/43.3232/-8.5093" target="_blank`">OpenStreetMap</a></td>
          <td>Internationally recognized fashion retailer with stores worldwide.</td>
        </tr>

        
        <tr>
          <th scope="row">9</th>
          <td>BASF SE</td>
          <td>Chemical</td>
          <td>Ludwigshafen, Germany</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=49.4868&mlon=8.4195#map=16/49.4868/8.4195" target="_blank`">OpenStreetMap</a></td>
          <td>Largest chemical producer globally, involved in a wide range of chemical and material industries.</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>Dow Chemical Company</td>
          <td>Chemical</td>
          <td>Midland, Michigan, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=43.6156&mlon=-84.2472#map=16/43.6156/-84.2472" target="_blank`">OpenStreetMap</a></td>
          <td>American multinational company, leading in chemicals, plastics, and agriculture products.</td>
        </tr>

      
        <tr>
          <th scope="row">11</th>
          <td>Unilever</td>
          <td>FMCG</td>
          <td>London, UK / Rotterdam, Netherlands</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=51.5123&mlon=-0.0808#map=16/51.5123/-0.0808" target="_blank`">OpenStreetMap</a></td>
          <td>Global consumer goods company with products in food, beverages, personal care, and cleaning agents.</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>Procter & Gamble</td>
          <td>FMCG</td>
          <td>Cincinnati, Ohio, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=39.1031&mlon=-84.5120#map=16/39.1031/-84.5120" target="_blank`">OpenStreetMap</a></td>
          <td>Leading consumer goods corporation, specializing in personal health/cleaning products.</td>
        </tr>

        
        <tr>
          <th scope="row">13</th>
          <td>UPS (United Parcel Service)</td>
          <td>Transportation/Logistics</td>
          <td>Atlanta, Georgia, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=33.7490&mlon=-84.3880#map=16/33.7490/-84.3880" target="_blank`">OpenStreetMap</a></td>
          <td>One of the world's largest package delivery and logistics companies.</td>
        </tr>
        <tr>
          <th scope="row">14</th>
          <td>Deutsche Post DHL Group</td>
          <td>Transportation/Logistics</td>
          <td>Bonn, Germany</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=50.7339&mlon=7.0982#map=16/50.7339/7.0982" target="_blank`">OpenStreetMap</a></td>
          <td>Multinational package delivery and supply chain management company.</td>
        </tr>

        
        <tr>
          <th scope="row">15</th>
          <td>Microsoft</td>
          <td>Tech</td>
          <td>Redmond, Washington, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=47.6740&mlon=-122.1215#map=16/47.6740/-122.1215" target="_blank`">OpenStreetMap</a></td>
          <td>Global leader in software, cloud computing, and consumer electronics.</td>
        </tr>
        <tr>
          <th scope="row">16</th>
          <td>Apple Inc.</td>
          <td>Tech</td>
          <td>Cupertino, California, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=37.3322&mlon=-122.0312#map=16/37.3322/-122.0312" target="_blank`">OpenStreetMap</a></td>
          <td>Innovator in consumer electronics, software, and digital services.</td>
        </tr>
        
        <tr>
          <th scope="row">17</th>
          <td>JPMorgan Chase & Co.</td>
          <td>Finance</td>
          <td>New York City, New York, USA</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=40.7580&mlon=-73.9787#map=16/40.7580/-73.9787" target="_blank`">OpenStreetMap</a></td>
          <td>Leading global financial services firm with a focus on investment banking and asset management.</td>
        </tr>
        <tr>
          <th scope="row">18</th>
          <td>HSBC Holdings plc</td>
          <td>Finance</td>
          <td>London, UK</td>
          <td><a href="`https://www.openstreetmap.org/?mlat=51.5064&mlon=-0.1272#map=16/51.5064/-0.1272" target="_blank`">OpenStreetMap</a></td>
          <td>One of the largest banking and financial services organizations in the world.</td>
        </tr>

        
      </tbody>
    </table>
  </div>
  
    </AdminLayout>
  )
}

export default Info