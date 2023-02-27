import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesión en tu cuenta</h2>
      <form className='mt-8 max-w-wd'>
        <div>
          <input className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-indigo-500"
            type="email"
            placeholder='crisquesadaco@gmail.com'
            required
          />
          <input className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:ring-indigo-500"
            type="password"
            required
          />
        </div>
        <div className='flex justify-between'>
          <div className=''>
            <label htmlFor='recuerdame'>
              <input name='recuerdame' type="checkbox" />
              Recuerdame
            </label>
          </div>
          <div>
            <Link to="/">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </div>

        <div>
          <Link to='/admin'>
            <button type='submit'>Iniciar sesión</button>
          </Link>
        </div>
        <div>
          O
        </div>
        <div>
          <button>Continua con Google</button>
        </div>        
      </form>
    </div>
  );
}

export default Login;