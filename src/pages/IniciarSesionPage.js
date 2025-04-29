import React from 'react';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';

function IniciarSesionPage() {
  return (
    <div>
      <h1>Página de Iniciar Sesión</h1>
      <LoginComponent />
      <RegisterComponent />
    </div>
  );
}

export default IniciarSesionPage;