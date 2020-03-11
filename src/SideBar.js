import React from 'react';
import { Link } from 'react-router-dom';

export const SideBar = function () {
    
      return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          {/* Sidebar - Brand */}
          <span className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">CrocoCODER <sup>MTD</sup></div>
          </span>
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
          
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt" />
              <span>Dashboard</span>
            </Link>
            <Link className="nav-link" to="/users">
              <i className="fas fa-fw fa-users" />
              <span>Users</span>
            </Link>
          </li>
          
          
          
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle" />
          </div>
        </ul>
        
      );
    
  }