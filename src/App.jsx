import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Clientes from "./pages/Clientes.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="clientes" element={<Clientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
