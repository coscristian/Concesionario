import React from 'react';
import {Link} from 'react-router-dom';
import TriggerDarkMode from 'components/triggerDarkMode';
import ImagenLogo from './ImagenLogo';
import 'styles/responsive.css';

const Sidebar = () => {
  return (
    <nav className='w-72 border border-gray-500 h-full flex flex-col bg-gray-200 p-4 sidebar'>
      <Link to="/admin">
        <ImagenLogo />
      </Link>
      
      <div className='my-4'>
        <Ruta nombre={'Perfil'} ruta={'/admin/perfil'}/>
        <Ruta nombre={'Vehiculos'} ruta={'/admin/vehiculos'}/>
        <Ruta nombre={'Ventas'} ruta={'/admin/ventas'}/>
        <Ruta nombre={'Usuarios'} ruta={'/admin/usuarios'}/>
      </div>
      <button>Cerrar Sesión</button>
    </nav>
  );
}

const Ruta = ({ruta, nombre}) => {
  return (
    <Link to={ruta}>
      <button className='flex items-start p-1 w-full my-1 text-white bg-indigo-400 hover:bg-indigo-900 rounded-md justify-center'>
        {nombre}
      </button>   
    </Link>      
  );
}

export default Sidebar;