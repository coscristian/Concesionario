import React, {useEffect, useState} from 'react';

const VehiculosBackend = [
  {
    nombre:"Corolla",
    marca: "Toyota",
    modelo: 2014
  },
  {
    nombre:"Sandero",
    marca: "Renault",
    modelo: 2015
  },
  {
    nombre:"Ray4",
    marca: "Toyota",
    modelo: 2021
  },
  {
    nombre:"Fiesta",
    marca: "Ford",
    modelo: 2017
  },
  {
    nombre:"Mazda 3",
    marca: "Mazda",
    modelo: 2020
  },
  {
    nombre:"Onix",
    marca: "Chevrolet",
    modelo: 2019
  },
]


const Vehiculos = () => {

  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo");
  const [vehiculos, setVehiculos] = useState([]);


  useEffect( () => {
    setTextoBoton(mostrarTabla ? "Crear nuevo vehiculo" : "Mostrar todos los vehiculos");
  }
  , [mostrarTabla]);

  useEffect(() => {
    // Obtener lista de vehiculos desde el backend
    setVehiculos(VehiculosBackend);
  }, []);

  return (
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col'>
        <h2 className='text-3xl font-extrabold'>Página de administración de vehiculos</h2>
        <button onClick={() => {setMostrarTabla(!mostrarTabla);}} className='p-5 bg-indigo-500 text-white m-6 rounded-full w-28 self-end'>{textoBoton}
        </button>
      </div>
      
      {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos} /> : <FormularioCreacionVehiculos />}
      
    </div>
  );
}

const TablaVehiculos = ({listaVehiculos}) => {
  console.log(listaVehiculos);
  return  (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los vehiculos</h2>
      <table>
        
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
          </tr>
        </thead>

        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </div>
  );
}

const FormularioCreacionVehiculos = () => {
  return (
  <div className='flex flex-col items-center justify-center'>
    <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehiculo</h2>
    <form action="" className='grid grid-cols-2'>
      <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" />
      <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" />
      <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" />
      <input className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2" type="text" />
      <button className='col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>Guardar vehiculo</button>
    </form>
  </div>);
}

export default Vehiculos;