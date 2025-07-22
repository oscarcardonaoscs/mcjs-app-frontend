import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div className="sidebar-brand-text mx-3">MCJ's Cleaning Service</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item">
        <NavLink to="/" className={linkClass}>
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/clientes" className={linkClass}>
          <i className="fas fa-fw fa-users" />
          <span>Clientes</span>
        </NavLink>
      </li>
      <hr className="sidebar-divider" />
    </nav>
  );
}
