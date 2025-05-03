import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import RegisterComponent from '../components/RegisterComponent';
import BotonFacil from '../components/botones/BotonFacil';
import '../styles/pages/IniciarSesionPage.css';


function IniciarSesionPage() {
  const [activeComponent, setActiveComponent] = useState('login');

  return (
    <div id='contenedor'>
      <div id='menu-login'>
      <BotonFacil texto="Iniciar Sesión" onClick={() => setActiveComponent('login')} />
      <BotonFacil texto="Registrarse" onClick={() => setActiveComponent('register')} />
      </div>
      {activeComponent === 'login' && <LoginComponent />}
      {activeComponent === 'register' && <RegisterComponent />}
      <div>
        <h1>Bienvenidos a INMOTECH</h1>
        <p>una plataforma para inmuebles</p>
      </div>
    </div>
  );
}

export default IniciarSesionPage;