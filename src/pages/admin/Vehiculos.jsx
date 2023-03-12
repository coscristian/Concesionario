import React, {useEffect, useState} from 'react';

const Vehiculos = () => {
  return (
    <div>
      <h2>Página de administración de vehiculos</h2>
      <button>Crear nuevo Vehiculo</button>
      <TablaVehiculos />
    </div>
  );
}


const TablaVehiculos = () => {
  return <div>Esto es un div pero debería ser una tabla mostrando todos los vehiculos</div>
}

const FormularioCreacionVehiculos = () => {
  return <div>Esto es un div pero debería ser formulario para crear un nuevo vehículo</div>
}

export default Vehiculos;