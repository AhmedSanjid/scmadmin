import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

function Dashboard() {
    return(
        <AdminLayout>
    
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>{/*End Page Title */}
    
        <section className="section dashboard">
          <div className="row">
    
            {/*Left side columns */}
            <div className="col-lg-8">
              <div className="row">
    
                {/*Sales Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card sales-card">
    
                    <div className="filter">
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
    
                    <div className="card-body">
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
                    </div>
    
                  </div>
                </div>{/*End Sales Card */}
    
                {/*Revenue Card */}
                <div className="col-xxl-4 col-md-6">
                  <div className="card info-card revenue-card">
    
                    <div className="filter">
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
    
                    <div className="card-body">
                      <h5 className="card-title">Ship <span></span></h5>
    
                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-tsunami"></i>
                        </div>
                        <div className="ps-3">
                          <h6>3,264</h6>
                          <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
    
                        </div>
                      </div>
                    </div>
    
                  </div>
                </div>{/*End Revenue Card */}
    
                {/*Customers Card */}
                <div className="col-xxl-4 col-xl-12">
    
                  <div className="card info-card customers-card">
    
                    <div className="filter">
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
    
                    <div className="card-body">
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
    
                    </div>
                  </div>
    
                </div>{/*End Customers Card */}
    
                {/*Reports */}
                <div className="col-12">
                  <div className="card">
    
                    <div className="filter">
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
    
                    <div className="card-body">
                      <h5 className="card-title">Reports <span>/Today</span></h5>
    
                      {/*Line Chart */}
                      <div id="reportsChart"></div>
    
                      
                    </div>
    
                  </div>
                </div>{/*End Reports */}
    
                {/*Recent Sales */}
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
    
                    <div className="filter">
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
    
                    <div className="card-body">
                      <h5 className="card-title">Warehousing <span>| Today</span></h5>
    
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
    
                    </div>
    
                  </div>
                </div>
    
                {/*Top Selling */}
                <div className="col-12">
                  <div className="card top-selling overflow-auto">
    
                    <div className="filter">
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
    
                    <div className="card-body pb-0">
                      <h5 className="card-title">Delivery <span>| Next Week</span></h5>
    
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
                            <td>Polly packs, Boards, It parts & goods materials</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">1232</td>
                            <td>EastBay Storage Facility</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-2.jpg" alt=""/></a></th>
                            <td>engine, gearbox, clutch, battery, brakes, radiator, steering & suspension</td>
                            <td>20-Oct</td>
                            <td className="fw-bold">2754</td>
                            <td>BlueOcean Storage Center</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-3.jpg" alt=""/></a></th>
                            <td>DScissors, Needle Holders, Curette & Forceps</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">1458</td>
                            <td>IronGate Logistics Warehouse</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-4.jpg" alt=""/></a></th>
                            <td>Home, Furniture & Appliances</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">9863</td>
                            <td>KDS Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-5.jpg" alt=""/></a></th>
                            <td>Raw materials for Architectural & Decorative Coatings</td>
                            <td>20-Oct</td>
                            <td className="fw-bold">4230</td>
                            <td>BSRM Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-6.jpg" alt=""/></a></th>
                            <td>Gillette, Bounty, Pampers & Febreze</td>
                            <td>23-Oct</td>
                            <td className="fw-bold">1242</td>
                            <td>Golden Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-7.jpg" alt=""/></a></th>
                            <td>KNITWEAR, JEANS & T-shirts</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">4659</td>
                            <td>BrightPath Fulfillment Hub</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-8.jpg" alt=""/></a></th>
                            <td>Mac, Ipad, Iphone, Watch & TV</td>
                            <td>21-Oct</td>
                            <td className="fw-bold">4847</td>
                            <td>GreenField Storage Depot</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-9.jpg" alt=""/></a></th>
                            <td>Polypropylene,Ethylene Acrylic Acid, & Foamed</td>
                            <td>22-Oct</td>
                            <td className="fw-bold">5644</td>
                            <td>Global Logistics Hub</td>
                            <td><span className="badge bg-warning">Pending</span></td>
                          </tr>
                          <tr>
                            <th scope="row"><a href="#"><img src="assets/img/product-10.jpg" alt=""/></a></th>
                            <td>Furnitures,It parts</td>
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
              <div className="card">
  <div className="filter">
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

  <div className="card-body">
    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

    <div className="activity">
      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">32 min</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-success'></i>
        </div>
        <div className="col activity-content">
          Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
        </div>
      </div>{/*End activity item*/}

      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">56 min</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-danger'></i>
        </div>
        <div className="col activity-content">
          Voluptatem blanditiis blanditiis eveniet
        </div>
      </div>{/*End activity item*/}

      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">2 hrs</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-primary'></i>
        </div>
        <div className="col activity-content">
          Voluptates corrupti molestias voluptatem
        </div>
      </div>{/*End activity item*/}

      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">1 day</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-info'></i>
        </div>
        <div className="col activity-content">
          Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
        </div>
      </div>{/*End activity item*/}

      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">2 days</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-warning'></i>
        </div>
        <div className="col activity-content">
          Est sit eum reiciendis exercitationem
        </div>
      </div>{/*End activity item*/}

      <div className="activity-item d-flex align-items-center mb-2">
        <div className="activite-label col-auto">4 weeks</div>
        <div className="col-auto">
          <i className='bi bi-circle-fill activity-badge text-muted'></i>
        </div>
        <div className="col activity-content">
          Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
        </div>
      </div>{/*End activity item*/}
    </div>
  </div>
</div>{/*End Recent Activity */}

    
              {/*Budget Report */}
              <div className="card">
                <div className="filter">
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
    
                <div className="card-body pb-0">
                  <h5 className="card-title">Budget Report <span>| This Month</span></h5>
                  <div id="budgetChart" style={{ minHeight: "400px" }} className="echart"></div>
                </div>
              </div>{/*End Budget Report */}
    
              {/*Website Traffic */}
              <div className="card">
                <div className="filter">
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
    
                <div className="card-body pb-0">
                  <h5 className="card-title">Website Traffic <span>| Today</span></h5>
    
                  <div id="trafficChart" style={{ minHeight: "400px" }} className="echart"></div>
    
                  
    
                </div>
              </div>{/*End Website Traffic */}
    
              {/*News & Updates Traffic */}
              <div className="card">
                <div className="filter">
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
    
                <div className="card-body pb-0">
                  <h5 className="card-title">News &amp; Updates <span>| Today</span></h5>
    
                  <div className="news">
                    <div className="post-item clearfix">
                      <img src="assets/img/news-1.jpg" alt=""/>
                      <h4><a href="#">Nihil blanditiis at in nihil autem</a></h4>
                      <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                    </div>
    
                    <div className="post-item clearfix">
                      <img src="assets/img/news-2.jpg" alt=""/>
                      <h4><a href="#">Quidem autem et impedit</a></h4>
                      <p>Illo nemo neque maiores vitae officiis cum eum turos elan dries werona nande...</p>
                    </div>
    
                    <div className="post-item clearfix">
                      <img src="assets/img/news-3.jpg" alt=""/>
                      <h4><a href="#">Id quia et et ut maxime similique occaecati ut</a></h4>
                      <p>Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam et totam...</p>
                    </div>
    
                    <div className="post-item clearfix">
                      <img src="assets/img/news-4.jpg" alt=""/>
                      <h4><a href="#">Laborum corporis quo dara net para</a></h4>
                      <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                    </div>
    
                    <div className="post-item clearfix">
                      <img src="assets/img/news-5.jpg" alt=""/>
                      <h4><a href="#">Et dolores corrupti quae illo quod dolor</a></h4>
                      <p>Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae dignissimos eius...</p>
                    </div>
    
                  </div>{/*End sidebar recent posts*/}
    
                </div>
              </div>{/*End News & Updates */}
    
            </div>{/*End Right side columns */}
    
          </div>
        </section>
    
      </AdminLayout>
    )
}

export default Dashboard