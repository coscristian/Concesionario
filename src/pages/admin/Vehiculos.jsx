import React, {useEffect, useState} from 'react';

const Vehiculos = () => {

  // En los Onchange settear los estados
  // UseEffect poner a escuchar los estados a medida que van cambiando

  // Getter, Setter
  const [nombre, setNombreVehiculo] = useState(""); // Valor inicial para la variable
  const [marca, setMarcaVehiculo] = useState("");
  const [modelo, setModeloVehiculo] = useState("");

  useEffect(() => {
    console.log("Hola, soy un useEffect que se ejecuta solo una vez cuando la pagina se renderiza porque tiene el array de dependencias vacío");

  }, []);

  const enviarDatosAlBackend = () => {
    console.log("El nombre del vehiculo es:", nombre);
    console.log("La marca del vehiuclo es:", marca);
    console.log("El modelo del vehiculo es:", modelo);
  }

  // UseEffect escuchar variable
  useEffect(() => {
    console.log("Esto es una función que se ejecuta cada que se cambia el valor de nombre vehiculo");
    console.log("El valor de la variable es: ", nombre);
  },[nombre]);


  return (
    <div>
      <div>Administracion de vehiculos</div>
      <form className='flex flex-col'>
        <h2 className='font-bold'>Formulario creacion de vehiculos</h2>
        <input onChange={(e) => {setNombreVehiculo(e.target.value)}} className="my-1" type="text" placeholder='Nombre del vehiculo' />
        <input onChange={(e) => {setMarcaVehiculo(e.target.value)}} className="my-1" type="text" placeholder='Marca del vehiculo' />
        <input onChange={(e) => {setModeloVehiculo(e.target.value)}} className="my-1" type="text" placeholder='MOdelo del vehiculo' />
        <button type="button" onClick={enviarDatosAlBackend}>Enviar datos</button>
      </form>
    </div>
  );
}

export default Vehiculos;