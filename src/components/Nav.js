// src/components/Nav.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-content">
        <ul className="nav-list">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/menu" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/reservations" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/order-online" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "nav-link nav-link--active" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;