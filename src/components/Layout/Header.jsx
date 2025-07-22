import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <span className="navbar-text">MCJ’s Cleaning Service</span>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">Perfil</li>
          <li className="nav-item ms-3">Logout</li>
        </ul>
      </div>
    </nav>
  );
}
