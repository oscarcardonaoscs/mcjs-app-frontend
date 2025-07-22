import React from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
