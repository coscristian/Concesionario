import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VehiculosBackend = [
  {
    nombre: "Corolla",
    marca: "Toyota",
    modelo: 2014,
    usado: "Si",
  },
  {
    nombre: "Sandero",
    marca: "Renault",
    modelo: 2015,
    usado: "No",
  },
  {
    nombre: "Ray4",
    marca: "Toyota",
    modelo: 2021,
    usado: "No",
  },
  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2017,
    usado: "Si",
  },
  {
    nombre: "Mazda 3",
    marca: "Mazda",
    modelo: 2020,
    usado: "No",
  },
  {
    nombre: "Onix",
    marca: "Chevrolet",
    modelo: 2019,
    usado: "Si",
  },
];

const Vehiculos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo");
  const [vehiculos, setVehiculos] = useState([]);
  const [colorBoton, setColorBoton] = useState("indigo");

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Crear nuevo vehiculo");
      setColorBoton("indigo");
    } else {
      setTextoBoton("Mostrar todos los vehiculos");
      setColorBoton("red");
    }
  }, [mostrarTabla]);

  useEffect(() => {
    // Obtener lista de vehiculos desde el backend
    setVehiculos(VehiculosBackend);
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-start p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold">
          Página de administración de vehiculos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`p-5 bg-${colorBoton}-500 text-white m-6 rounded-full w-28 self-end`}
        >
          {textoBoton}
        </button>
      </div>

      {mostrarTabla ? (
        <TablaVehiculos listaVehiculos={vehiculos} />
      ) : (
        <FormularioCreacionVehiculos
          funcionParaMostrarLaTabla={setMostrarTabla}
          listaVehiculos={vehiculos}
          funcionParaAgregarUnVehiculo={setVehiculos}/>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
      />
    </div>
  );
}

const TablaVehiculos = ({ listaVehiculos}) => {
  //console.log(listaVehiculos);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Todos los vehiculos
      </h2>
      <table>
        <thead>
          <tr>
            <th>Nombre del vehiculo</th>
            <th>Marca del vehiculo</th>
            <th>Modelo del vehiculo</th>
            <th>Usado</th>
          </tr>
        </thead>

        <tbody>
          {listaVehiculos.map((vehiculo) => {
            return (
              <tr>
                <td>{vehiculo.nombre}</td>
                <td>{vehiculo.marca}</td>
                <td>{vehiculo.modelo}</td>
                <td>{vehiculo.usado}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioCreacionVehiculos = ({funcionParaMostrarLaTabla, listaVehiculos, funcionParaAgregarUnVehiculo }) => {
  const [nombre, setNombre] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
  const [usado, setUsado] = useState();

  const enviarAlBackend = () => {
    console.log("Nombre:", nombre, "Modelo:", modelo, "Marca", marca, "Usado", usado);
    toast.success("Vehiculo agregado correctamente");
    funcionParaMostrarLaTabla(true);
    // Spread operator -> Tome lo que ya habia mas lo que voy a agregar
    funcionParaAgregarUnVehiculo([...listaVehiculos,
       {nombre: nombre, marca: marca, modelo: modelo, usado: usado}])
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>

      <form className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Nombre del vehiculo
          <input
            name="nombre"
            
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </label>

        <label className="flex flex-col" htmlFor="marca">
          Marca del vehiculo
          <select
            name="marca"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            value={marca}
            onChange={(e)=> {
              setMarca(e.target.value);
            }}
          >
            <option disabled>Seleccione una opcion</option>
            <option>Renault</option>
            <option>Toyota</option>
            <option>Ford</option>
            <option>Mazda</option>
            <option>Chevrolet</option>
          </select>
        </label>

        <label className="flex flex-col" htmlFor="modelo">
          Modelo del vehiculo
          <input
            name="modelo"
            
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1992}
            max={2023}
            value={modelo}
            onChange={(e) => {
              setModelo(e.target.value);
            }}
          />
        </label>

        <label className="flex flex-col" htmlFor="usado">
          Usado
          <select
            name="usado"
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            value={usado}
            onChange={(e)=> {
              setUsado(e.target.value);
            }}
          >
            <option disabled>Seleccione una opcion</option>
            <option>Si</option>
            <option>No</option>
          </select>
        </label>

        <button
          type="button"
          className="col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-600 text-white"
          onClick={()=>{
            enviarAlBackend();
          }}
        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
