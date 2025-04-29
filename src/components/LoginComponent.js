import React from 'react';

function LoginComponent() {
  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginComponent;