import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);

  return (
    <div
      className="md:hidden"
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        class={`mx-2 fas fa-${
          mostrarNavegacion ? "times" : "bars"
        } hover:text-yellow-600`}
      ></i>
      {mostrarNavegacion && (
        <ul className="bg-gray-900">
          <ResponsiveRoute nombre="Vehiculos" ruta="/admin/vehiculos"/>
          <ResponsiveRoute nombre="Ventas" ruta="/admin/ventas"/>
          <ResponsiveRoute nombre="Usuarios" ruta="/admin/usuarios"/>
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({nombre, ruta}) => {
    return (
        <Link to={ruta}>
            <li className="text-gray-200 border border-gray-300 p-1">{nombre}</li>
        </Link>
    );
}

export default SidebarResponsive;