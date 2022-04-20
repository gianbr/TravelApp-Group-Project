import React from "react";
import { Link } from "react-router-dom";
import './AdminPanel.css';

function AdminPanel() {
  return (
    <div classname="w-full h-screen relative">
    <div className="container">
        {/* Sección Productos */}
      <div className="GestorCard">
        <h4>GESTOR DE SERVICIOS</h4>
        <Link to="/servicios/" className="CreateButton">
          Nuevo servicio
        </Link>
        <br></br>
        <Link to="/destination" className="CreateButton">
          Listado de servicios
        </Link>
      </div>

      {/* Sección Ordenes */}
      <div className="GestorCard">
        <h4>GESTOR DE ORDENES</h4>
        <Link to="/orders" className="CreateButton">
         Listado de ordenes
        </Link>
      </div>

      {/* Sección Usuarioss */}
      <div className="GestorCard">
        <h4>GESTOR DE USUARIOS</h4>
        <Link to="/users" className="CreateButton">
          Listado de usuarios
        </Link>
      </div>
    </div>
    </div>
  );
}
export default AdminPanel;