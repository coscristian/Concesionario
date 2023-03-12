import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// UseRef -> 

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
          setMostrarTabla={setMostrarTabla}
          listaVehiculos={vehiculos}
          setVehiculos={setVehiculos}/>
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

const FormularioCreacionVehiculos = ({setMostrarTabla, listaVehiculos, setVehiculos }) => {

  const form = useRef(null);

  const submitForm = (e) =>{
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key)=>{
      nuevoVehiculo[key] = value;
    });
    setMostrarTabla(true);
    setVehiculos([...listaVehiculos, nuevoVehiculo]);
    // Identificar el caso de exito y mostrar un toast

    // Identificar el caso de falla  y mostrar un toast
    
    toast.success("Vehiculo agregado con exito!");
    console.log("Datos del form enviados", fd);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>

      <form ref={form} onSubmit={submitForm}  className="flex flex-col">
        <label className="flex flex-col" htmlFor="nombre">
          Nombre del vehiculo
          <input
            name="nombre"
            required
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="text"

            
          />
        </label>

        <label className="flex flex-col" htmlFor="marca">
          Marca del vehiculo
          <select
            name="marca"
            required
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"

            defaultValue={0}
          >
            <option disabled value={0}>Seleccione una opcion</option>
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
            required
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
            type="number"
            min={1992}
            max={2023}

            
          />
        </label>

        <label className="flex flex-col" htmlFor="usado">
          Usado
          <select
            name="usado"
            required
            className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"

            
          >
            <option disabled>Seleccione una opcion</option>
            <option>Si</option>
            <option>No</option>
          </select>
        </label>

        <button
          type="submit"
          className="col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-600 text-white"

        >
          Guardar vehiculo
        </button>
      </form>
    </div>
  );
};

export default Vehiculos;
