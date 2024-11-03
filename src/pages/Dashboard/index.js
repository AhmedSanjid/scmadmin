import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

function Dashboard() {
    return(
        <AdminLayout>

<section className="section dashboard" >
          <div className="row">
    
            {/*Left side columns */}
            <div className="col-lg-8">
              <div className="row">
    
                {/*Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className=" info-card sales-card">
    
                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div> */}
    
                    {/* <div className="card-body"> */}
                      <h5 className="card-title">Air <span></span></h5>
    
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-airplane-engines-fill"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                          <span className="text-success small pt-1 fw-bold">5%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                        </div>
                      </div>
                    {/* </div> */}
    
                  </div>
                </div>{/*End Sales Card */}
    
                {/*Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className=" info-card revenue-card">
    
                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div> */}
    
                    {/* <div className="card-body"> */}
                      <h5 className="card-title">Ship</h5>
    
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-tsunami"></i>
                        </div>
                        <div className="ps-3">
                          <h6>3,264</h6>
                          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                        </div>
                      </div>
                    {/* </div> */}
    
                  </div>
                </div>{/*End Revenue Card */}
    
                {/*Customers Card */}
                <div className="col-xxl-4 col-xl-12">
    
                  <div className=" info-card customers-card">
    
                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div> */}
    
                    {/* <div className="card-body"> */}
                      <h5 className="card-title">Highway<span></span></h5>
    
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-truck"></i>
                        </div>
                        <div className="ps-3">
                          <h6>1244</h6>
                          <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                        </div>
                      </div>
    
                    {/* </div> */}
                  </div>
    
                </div>{/*End Customers Card */}
    
                {/*Reports */}
                <div className="col-12">
                  <div className="card">

                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div> */}
    
                    {/* <div className="card-body">
                      <h5 className="card-title">Reports<span>/Today</span></h5>
    
                      
                      <div id="reportsChart"></div>
                       </div> */}
    
                  </div>
                </div>{/*End Reports */}
    
                {/*Recent Sales */}
                <div className="col-12" style={{marginTop:"200px"}}>
                  <div className=" recent-sales overflow-auto">
    
                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div> */}
    
                    {/* <div className="card-body"> */}
                      <h5 className="card-title text-info">Warehousing <span>| Today</span></h5>
    
                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Companies</th>
                            <th scope="col">Product</th>
                            <th scope="col">Via</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><a href="#">#2457</a></th>
                            <td>H&M Group</td>
                            <td>Denim & Shoes</td>
                            <td>Air</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2147</a></th>
                            <td>Microsoft</td>
                            <td>Xbox & HoloLens</td>
                            <td>Ship</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2049</a></th>
                            <td>Ford Motor Company</td>
                            <td>Rims & V12 Engines</td>
                            <td>Highway</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2644</a></th>
                            <td>Amazon</td>
                            <td>Cell Phones & Accessories</td>
                            <td>Highway</td>
                            <td><span className="badge bg-danger">Rejected</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2644</a></th>
                            <td>Dow Chemical Company</td>
                            <td>Einsteinium, Californium, Copper & Hydrogen </td>
                            <td>Ship</td>
                            <td><span className="badge bg-success">Approved</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#">#2147</a></th>
                            <td>	Johnson & Johnson</td>
                            <td>Duct tape, First aid kits & Dental floss </td>
                            <td>Air</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                        </tbody>
                      </table>
    
                    {/* </div> */}
    
                  </div>
                </div>
    
                {/*Top Selling */}
                <div className="col-12" style={{marginTop:"200px"}}>
                  <div className="top-selling overflow-auto">
    
                    {/* <div className="filter">
                      <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                        <li className="dropdown-header text-start">
                          <h6>Filter</h6>
                        </li>
    
                        <li><a className="dropdown-item" href="#">Today</a></li>
                        <li><a className="dropdown-item" href="#">This Month</a></li>
                        <li><a className="dropdown-item" href="#">This Year</a></li>
                      </ul>
                    </div>
     */}
                    <div className=" mt-0 pb-0" style={{marginTop:"150px"}}>
                      <h5 className="card-title text-info ">Delivery <span>| Next Week</span></h5>
    
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th scope="col">Companies</th>
                            <th scope="col">Products</th>
                            <th scope="col">Date</th>
                            <th scope="col">ID</th>
                            <th scope="col">Destination Locations</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-1.jpg" alt=""/></a></th>
                            <td>Deutsche Post DHL Group</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">1232</td>
                            <td>EastBay Storage Facility</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""/></a></th>
                            <td>Ford Motor Company</td>
                            <td>20-Oct</td>
                            <td className="fw-bold">2754</td>
                            <td>BlueOcean Storage Center</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""/></a></th>
                            <td>Pfizer Inc.</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">1458</td>
                            <td>IronGate Logistics Warehouse</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""/></a></th>
                            <td>Walmart Inc.</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">9863</td>
                            <td>KDS Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""/></a></th>
                            <td>Dow Chemical Company</td>
                            <td>20-Oct</td>
                            <td className="fw-bold">4230</td>
                            <td>BSRM Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-6.jpg" alt=""/></a></th>
                            <td>Procter & Gamble</td>
                            <td>23-Oct</td>
                            <td className="fw-bold">1242</td>
                            <td>Golden Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-7.jpg" alt=""/></a></th>
                            <td>Zara (Inditex Group)</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">4659</td>
                            <td>BrightPath Fulfillment Hub</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-8.jpg" alt=""/></a></th>
                            <td>	Apple Inc.	</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">4847</td>
                            <td>GreenField Storage Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-9.jpg" alt=""/></a></th>
                            <td>BASF SE</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">5644</td>
                            <td>Global Logistics Hub</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr className="mt-3">
                            <th scope="row"><a href="#"><img src="assets/img/product-10.jpg" alt=""/></a></th>
                            <td>JPMorgan Chase & Co.</td>
                            <td>19-Oct</td>
                            <td className="fw-bold">9842</td>
                            <td>Atlas Cargo Hub</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                        </tbody>
                      </table>
    
                    </div>
    
                  </div>
                </div>{/*End Top Selling */}
    
              </div>
            </div>{/*End Left side columns */}
    
            {/*Right side columns */}
            <div className="col-lg-4">
    
              {/*Recent Activity */}
              {/* <div className="card"> */}
  {/* <div className="filter">
    <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
      <li className="dropdown-header text-start">
        <h6>Filter</h6>
      </li>
      <li><a className="dropdown-item" href="#">Today</a></li>
      <li><a className="dropdown-item" href="#">This Month</a></li>
      <li><a className="dropdown-item" href="#">This Year</a></li>
    </ul>
  </div> */}

  <div className="card-body">
    <h5 className="card-title text-primary">Air Freight <span>| Update</span></h5>

    <div className="activity">
  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">32 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-success"></i>
    </div>
    <div className="col activity-content">
      Shipment from <strong>New York</strong> to <a href="#" className="fw-bold text-dark">London Heathrow</a> cleared customs
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">56 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-danger"></i>
    </div>
    <div className="col activity-content">
      Delayed due to <strong>bad weather</strong> at Frankfurt Airport
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 hrs</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-primary"></i>
    </div>
    <div className="col activity-content">
      <strong>Airway Bill</strong> generated for shipment to Singapore
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">1 day</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-info"></i>
    </div>
    <div className="col activity-content">
      In transit: <strong>Los Angeles</strong> to <a href="#" className="fw-bold text-dark">Tokyo Narita</a> 
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 days</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-warning"></i>
    </div>
    <div className="col activity-content">
      Customs inspection required for shipment from <strong>Dubai</strong> to <strong>Berlin</strong>
    </div>
  </div>


  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">4 weeks</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-muted"></i>
    </div>
    <div className="col activity-content">
      Shipment delayed: awaiting clearance in <strong>Hong Kong</strong> due to local holidays
    </div>
  </div>
  
</div>

  </div>
{/* </div> */}

{/* <div className="card"> */}
<div className="activity" style={{marginTop:"150px"}} >
<h5 className="card-title text-success">Sailing Freight <span>| Update</span></h5>
  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">32 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-success"></i>
    </div>
    <div className="col activity-content">
      Shipment departed from <strong>New York</strong> en route to <a href="#" className="fw-bold text-dark">Port of Rotterdam</a>
    </div>
  </div>

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">56 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-danger"></i>
    </div>
    <div className="col activity-content">
      Delay reported due to <strong>rough seas</strong> near the Gulf of Mexico
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 hrs</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-primary"></i>
    </div>
    <div className="col activity-content">
      <strong>Bill of Lading</strong> issued for shipment to <strong>Singapore Port</strong>
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">1 day</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-info"></i>
    </div>
    <div className="col activity-content">
      Container in transit from <strong>Los Angeles</strong> to <a href="#" className="fw-bold text-dark">Tokyo Port</a>
    </div>
  </div>


  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 days</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-warning"></i>
    </div>
    <div className="col activity-content">
      Customs inspection required at <strong>Dubai Port</strong> for shipment bound to <strong>Hamburg Port</strong>
    </div>
  </div>
  

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">4 weeks</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-muted"></i>
    </div>
    <div className="col activity-content">
      Shipment awaiting clearance at <strong>Hong Kong</strong> due to local port congestion
    </div>
  </div>
  
</div>
    {/* </div> */}
              {/*Website Traffic */}
              {/* <div className="card"> */}
            <div className="activity" style={{marginTop:"150px"}}>
        <h5 className="card-title text-danger">Highway Freight <span>| Update</span></h5>
  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">32 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-success"></i>
    </div>
    <div className="col activity-content">
      Truck departed from <strong>New York</strong> heading to <a href="#" className="fw-bold text-dark">Chicago Distribution Center</a>
    </div>
  </div>
  {/*End activity item*/}

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">56 min</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-danger"></i>
    </div>
    <div className="col activity-content">
      Delay due to <strong>traffic congestion</strong> on I-80 near Pittsburgh
    </div>
  </div>
  {/*End activity item*/}

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 hrs</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-primary"></i>
    </div>
    <div className="col activity-content">
      <strong>Waybill</strong> generated for delivery to <strong>Dallas Warehouse</strong>
    </div>
  </div>
  {/*End activity item*/}

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">1 day</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-info"></i>
    </div>
    <div className="col activity-content">
      Shipment in transit from <strong>Los Angeles</strong> to <a href="#" className="fw-bold text-dark">Houston Terminal</a>
    </div>
  </div>
  {/*End activity item*/}

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">2 days</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-warning"></i>
    </div>
    <div className="col activity-content">
      Inspection required at <strong>Denver Weigh Station</strong> for freight bound to <strong>St. Louis</strong>
    </div>
  </div>
  {/*End activity item*/}

  <div className="activity-item d-flex align-items-center mb-2">
    <div className="activity-label col-auto">4 weeks</div>
    <div className="col-auto">
      <i className="bi bi-circle-fill activity-badge text-muted"></i>
    </div>
    <div className="col activity-content">
      Shipment delayed at <strong>Portland</strong> due to highway repairs on I-5
    </div>
  </div>
  {/*End activity item*/}
</div>

              {/* </div> */}
    
            </div>{/*End Right side columns */}
    
          </div>
        </section>
    
      </AdminLayout>
    )
}

export default Dashboard