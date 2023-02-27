import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Inicia sesión en tu cuenta</h2>
      <form>
        <div>
          <input type="email" placeholder='crisquesadaco@gmail.com' required />
          <input type="password" required />
        </div>
        <div>
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
        <div>
          <Link to='/admin'>
            <button type='submit'>Iniciar sesión</button>
          </Link>
        </div>
        
      </form>
    </div>
  );
}

export default Login;