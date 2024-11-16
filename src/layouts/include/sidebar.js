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
    role:[1,2],
    name:'Staff',
    link:'Staff',
    icon:'bi bi-people-fill'
  },{
    role:[1,2],
    name:'Warehouse',
    link:'Warehouse',
    icon:'bi bi-houses'
  },{
    role:[1,2],
    name:'Warehouse Block',
    link:'WarehouseBlock',
    icon:'bi bi-house-add'
  },{
    role:[1,2],
    name:'Country',
    link:'country',
    icon:'bi bi-globe-asia-australia'
  },{
    role:[1,2],
    name:'State',
    link:'state',
    icon:'bi bi-globe2'
  },{
    role:[1,2,3],
    name:'Location',
    link:'Location',
    icon:'bi bi-geo-alt-fill'
  },{
    role:[1,2],
    name:'Customer',
    link:'customer',
    icon:'bi bi-bank2'
  },{
   role:[1,2,3],
    name:'Transport Type',
    link:'Transporttype',
    icon:'bi bi-train-freight-front'
  },{
    role:[1,2,3],
    name:'Orders',
    link:'freights',
    icon:'bi bi-layout-text-sidebar-reverse'
  },{
    role:[1,2,3],
    name:'Item Category',
    link:'Itemcategory',
    icon:'bi bi-diagram-3'
  },{
    role:[1,2,3],
    name:'Item',
    link:'Item',
    icon:'bi bi-backpack4-fill'
  },{
    role:[1,2],
    name:'Cargo Track',
    link:'cargotrack',
    icon:'bi bi-microsoft-teams'
  },{
    role:[1,2],
    name:'Notifications',
    link:'Alert',
    icon:'bi bi-app-indicator'
  },{
    role:[1,2],
    name:'History',
    link:'history',
    icon:'bi bi-calendar-range-fill'
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
          
        </ul>
    
      </aside>
    )
}

export default Sidebar