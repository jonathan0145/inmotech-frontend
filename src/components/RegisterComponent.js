import React from 'react';

function RegisterComponent() {
  return (
    <div>
      <h2>Registrar</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Correo Electrónico:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterComponent;