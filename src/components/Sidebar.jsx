import React from "react";
import { Link, useLocation } from "react-router-dom";
import TriggerDarkMode from "components/triggerDarkMode";
import ImagenLogo from "./ImagenLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useActiveRoute from "hooks/useActiveRoute";

const Sidebar = () => {
  return (
    <div>
      <nav className="hidden md:flex md:w-72 border border-gray-500 h-full flex-col bg-gray-200 p-4 ">
        <Link to="/admin">
          <ImagenLogo />
        </Link>

        <div className="my-4">
          <Ruta nombre={"Perfil"} ruta={"/admin/perfil"} />
          <Ruta nombre={"Vehiculos"} ruta={"/admin/vehiculos"} />
          <Ruta nombre={"Ventas"} ruta={"/admin/ventas"} />
          <Ruta nombre={"Usuarios"} ruta={"/admin/usuarios"} />
        </div>
        <button>Cerrar Sesión</button>
      </nav>
    </div>
  );
};

const Ruta = ({ ruta, nombre }) => {
  const isActive = useActiveRoute(ruta); // Hook personalizado
  return (
    <Link to={ruta}>
      <button
        className={`p-1 my-2  bg-${
          isActive ? "indigo" : "gray"
        }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
      >
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;
