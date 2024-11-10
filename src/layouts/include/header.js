import React from 'react'
import { logout } from '../../Api/AllApi'
import { useLocation, Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/login');
      }
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
  return location.pathname == path ? 'active' :" ";
  }
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
    
    <div className="d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt=""/>
        <span className="d-none d-lg-block">ThiKana</span>
      </Link>
    </div>


    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search"></i>
          </a>
        </li>

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-dark badge-number">4</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning"></i>
              <div>
                <h4>Flight JKL789</h4>
                <p>2 cargo missing!</p>
                <p>30 min. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-x-circle text-danger"></i>
              <div>
                <h4>Ware House</h4>
                <p>Downtown Dubai warehouse are flodded</p>
                <p>1 hr. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-check-circle text-success"></i>
              <div>
                <h4>MV Harmony</h4>
                <p>Arrived at port Singapur</p>
                <p>2 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="notification-item">
              <i className="bi bi-info-circle text-primary"></i>
              <div>
                <h4>Law issues!</h4>
                <p>Police retures the Vehicle at base (TRK-75982)</p>
                <p>4 hrs. ago</p>
              </div>
            </li>

            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown">

          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text"></i>
            <span className="badge bg-dark badge-number">3</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>Amazon</h4>
                  <p>Delivery is taking too long today!</p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-2.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>Toyota Motor Corporation</h4>
                  <p>Shipment under loding, Thank you!</p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="message-item">
              <a href="#">
                <img src="assets/img/messages-3.jpg" alt="" className="rounded-circle"/>
                <div>
                  <h4>Unilever</h4>
                  <p>Cargo left on time, freezing container damaged slightly</p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>

          </ul>

        </li>

        <li className="nav-item dropdown pe-3">

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
            <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Sanjid Ahmed Mukut</h6>
              <span>Admin</span>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li>
              <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i className="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider"/>
            </li>

            <li onClick={activeMenu} className={`sidebar-item ${isLinkActive("/login")}`}>
              <Link to="/login" className="sidebar-link dropdown-item d-flex align-items-center" onClick={handelLogout}>
                <i className="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </Link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>

  </header>
  )
}

export default Header