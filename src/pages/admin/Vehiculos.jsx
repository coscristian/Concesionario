import React, {useEffect, useState} from 'react';

// Realizar un formulario que le pida al usuario su edad y muestre un mensaje que diga si el usuario es mayor de edad


const Vehiculos = () => {

  // En los Onchange settear los estados
  // UseEffect poner a escuchar los estados a medida que van cambiando

  const [edad, setEdad] = useState(0);
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);
  const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

  useEffect(() => {
    if (edad >= 18){
      setEsMenorDeEdad(false);
      console.log("La persona es mayor de edad");
    }else{
      setEsMenorDeEdad(true);
      console.log("La persona es menor de edad");
    }
  })

  return (
    <div>
      <form className='flex flex-col'>
          <h2 className='font-bold'>Formulario creacion de vehiculos</h2>
          <label htmlFor='edad'>Por favor ingrede su edad
            <input value={edad} onChange={(e) => {
              setEdad(e.target.value);
            }}
            className="border border-gray-600" name='edad' type="number"></input>
          </label>

          {
            esMenorDeEdad ? (
              <span className='text-3xl text-red-500'>!Usted es menor de edad, no puede hacer pagos</span>
            ): (
              <span className='text-3xl text-green-500'>!Usted es mayor de edad, puede hacer pagos</span>
          )}
          <button onClick={() => {
            setMostrarCamposAdicionales(!mostrarCamposAdicionales);
          }} type='button' className='text-white bg-indigo-500'>Mostrar campos adicionales</button>

          {mostrarCamposAdicionales && (
            <div>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'></input>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'></input>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'></input>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'></input>
              <input className='border bg-gray-400 my-2 p-3' placeholder='dato nuevo' type='text'></input>
            </div>
          )

          
          }

        </form>
    </div>
  );
}

export default Vehiculos;