import React from "react";

export default function Dashboard() {
  return (
    <div className="row">
      {/* Ejemplo de card que ocupa ancho completo */}
      <div className="col-12 mb-4">
        <div className="card shadow w-100">
          <div className="card-body">
            <h5 className="card-title"># Clientes</h5>
            <p className="card-text display-4">0</p>
          </div>
        </div>
      </div>
      {/* …más cards… */}
    </div>
  );
}
