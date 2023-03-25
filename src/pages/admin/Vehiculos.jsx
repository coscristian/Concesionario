import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";
import { Dialog, Tooltip } from "@mui/material";

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
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    if (ejecutarConsulta) {
      console.log("OBtener vehiculos");
      setEjecutarConsulta(false);
    }
  }, [ejecutarConsulta]);

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
      <div className="flex flex-col ">
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
          setVehiculos={setVehiculos}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const FilaVehiculo = ({ vehiculo }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const eliminarVehiculo = () => {
    console.log("eliminar vehiculo");
  };
  return (
    <tr>
      {edit ? (
        <>
          <td>
            <input
              type="text"
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              defaultValue={vehiculo.nombre}
            />
          </td>
          <td>
            <input
              type="text"
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              defaultValue={vehiculo.marca}
            />
          </td>
          <td>
            <input
              type="text"
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              defaultValue={vehiculo.modelo}
            />
          </td>
          <td>
            <input
              type="text"
              className="bg-gray-50 border border-gray-600 p-2 rounded-lg m-2"
              defaultValue={vehiculo.usado}
            />
          </td>
        </>
      ) : (
        <>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.modelo}</td>
          <td>{vehiculo.usado}</td>
        </>
      )}

      <td>
        <div className="flex w-full justify-around">
          {edit ? (
            <>
              <Tooltip title="Guardar cambios" arrow>
                <button type="submit">
                  <i
                    onClick={() => setEdit(!edit)}
                    className="fas fa-check hover:text-green-500"
                  />
                </button>
              </Tooltip>
              <Tooltip title="Cancelar edición" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-ban text-red-700 hover:text-red-500"
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Editar vehiculo" arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className="fas fa-pencil-alt text-yellow-700 hover:text-yellow-500"
                />
              </Tooltip>
              <Tooltip title="Eliminar vehiculo" arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className="fas fa-trash text-red-700 hover:text-red-500"
                />
              </Tooltip>
            </>
          )}
        </div>
        <Dialog open={openDialog}>
          <div className="p-8 flex flex-col">
            <h1 className="text-gray-900">
              ¿Está seguro de querer eliminar el vehiculo?
            </h1>
            <div className="flex w-full justify-center">
              <button onClick={() => eliminarVehiculo()} className="px-4 py-2 mx-2 my-4 text-2xl font-bold bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md">Sí</button>
              <button onClick={() => setOpenDialog(false)} className="px-4 py-2 mx-2 my-4 text-2xl font-bold bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md">No</button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

const TablaVehiculos = ({ listaVehiculos }) => {
  //console.log(listaVehiculos);

  const form = useRef(null);

  const submitEdit = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    console.log(fd);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Todos los vehiculos
      </h2>
      <form ref={form} className="w-full" onSubmit={submitEdit}>
        <table className="tabla">
          <thead>
            <tr>
              <th>Nombre del vehiculo</th>
              <th>Marca del vehiculo</th>
              <th>Modelo del vehiculo</th>
              <th>Usado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {listaVehiculos.map((vehiculo) => {
              return <FilaVehiculo key={nanoid()} vehiculo={vehiculo} />;
            })}
          </tbody>
        </table>
      </form>
    </div>
  );
};

const FormularioCreacionVehiculos = ({
  setMostrarTabla,
  listaVehiculos,
  setVehiculos,
}) => {
  const form = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });
    setMostrarTabla(true);
    setVehiculos([...listaVehiculos, nuevoVehiculo]);
    // Identificar el caso de exito y mostrar un toast

    // Identificar el caso de falla  y mostrar un toast

    toast.success("Vehiculo agregado con exito!");
    console.log("Datos del form enviados", fd);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">
        Crear nuevo vehiculo
      </h2>

      <form ref={form} onSubmit={submitForm} className="flex flex-col">
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
            <option disabled value={0}>
              Seleccione una opcion
            </option>
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
