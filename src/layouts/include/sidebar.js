import React, { useEffect, useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const logeduser=JSON.parse(localStorage.getItem("userdata"));
  const role_id=logeduser.role_id;

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
const nav=[
  {
    role:[1,2],
    name:'User',
    link:'user',
    icon:'bi bi-person-raised-hand'
  },{
    role:[2,3],
    name:'Country',
    link:'country',
    icon:'bi bi-globe-asia-australia'
  },{
    role:[1,3],
    name:'Staff',
    link:'Staff',
    icon:'bi bi-people-fill'
  },{
    role:[2,3],
    name:'Customer',
    link:'customer',
    icon:'bi bi-bank2'
  },{
    role:[1,9],
    name:'State',
    link:'state',
    icon:'bi bi-globe2'
  },{
    role:[1],
    name:'Location',
    link:'Location',
    icon:'bi bi-geo-alt-fill'
  },{
    role:[1],
    name:'Warehouse',
    link:'Warehouse',
    icon:'bi bi-houses'
  },{
    role:[1],
    name:'Warehouse Block',
    link:'WarehouseBlock',
    icon:'bi bi-house-add'
  },{
    role:[1],
    name:'Item',
    link:'Item',
    icon:'bi bi-backpack4-fill'
  },{
    role:[1],
    name:'Item Category',
    link:'Itemcategory',
    icon:'bi bi-diagram-3'
  },{
    role:[1],
    name:'Transport Type',
    link:'Transporttype',
    icon:'bi bi-train-freight-front'
  },{
    role:[1],
    name:'Orders',
    link:'freights',
    icon:'bi bi-layout-text-sidebar-reverse'
  },{
    role:[1],
    name:'Order Details',
    link:'Orderdetails',
    icon:'bi bi-ui-checks'
  }
]
const location = useLocation();
const isLinkActive = (path) => {
    return location.pathname == path ? 'active':"";
  }
                
    return(
        <aside id="sidebar" className="sidebar"img src="../assets/img/img2.png">
    
        <ul className="sidebar-nav" id="sidebar-nav">
    
          {nav && nav.map((d, key) =>
            <>
              {d.role.find((element) => element == role_id) && 
                <div className="d-grid gap-2 mb-3">
                  <button onClick={activeMenu} className={`sidebar-item ${isLinkActive("/"+d.link)}`}
                    style={{
                      boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                      border: "none",
                      borderRadius: "5px" 
                      }}>
                    <Link to={`/${d.link}`} className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className={`/${d.icon}`}></i> {d.name}
                    </Link>
                  </button>
                </div>
              }
            </>
          )}

              {/* 
              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/State")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/State" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-globe2"></i> State
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/country")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/country" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-globe-asia-australia"></i> Country
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Location")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Location" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                        <i className="bi bi-geo-alt-fill"></i> Location
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Warehouse")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Warehouse" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                       <i className="bi bi-houses"></i> Warehouse
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/WarehouseBlock")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/WarehouseBlock" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-house-add"></i> Warehouse Blocks
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Itemcategory")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Itemcategory" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-diagram-3"></i> Item Category
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Item")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Item" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                        <i className="bi bi-backpack4-fill"></i> Items
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Transporttype")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Transporttype" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                        <i className="bi bi-train-freight-front"></i> Transport Type
                      </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/freights")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/freights" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-layout-text-sidebar-reverse"></i> Orders </Link>
                  </button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <button
                      onClick={activeMenu}
                      className={`sidebar-item ${isLinkActive("/Orderdetails")}`}
                      style={{
                        boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)", 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: "5px" 
                        }}>
                      <Link to="/Orderdetails" className="sidebar-link" style={{ textDecoration: "none", color: "black" }}>
                      <i className="bi bi-ui-checks"></i> Order Details </Link>
                  </button>
              </div> */}
    
          {/* <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem"></i><span>Authorised Person</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
              
                <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Admin")}`}>
                <Link to="/Admin" className="sidebar-link">Admin</Link></p>
              
              </li>
              <li>
                
              <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Staffs1")}`}>
              <Link to="/Staffs1" className="sidebar-link">Authorised Stuffs</Link></p>
                
              </li>
              <li>
                
                <p onClick={activeMenu} className={`sidebar-item ${isLinkActive("/Person")}`}>
                <Link to="/Person" className="sidebar-link">Authorised Members</Link></p>
                
              </li>
            </ul>
          </li> */}
{/* 
          <li className="nav-heading">Pages</li>
    
           <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-contact.html">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-register.html">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-login.html">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-error-404.html">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-blank.html">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </a>
          </li> */}
    
        </ul>
    
      </aside>
    )
}

export default Sidebar