import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IniciarSesionPage from './pages/IniciarSesionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/iniciar-sesion" element={<IniciarSesionPage />} />
        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;

/*
  necesito arreglar las rutas donde al ingresar a la pagina lo primero que se pueda hacer es iniciar seccion
  * deben haber dos botones uno para iniciar seccion y otro para registrarse
    *en iniciar seccion 
      -debe haber un formulario para iniciar seccion
      -un boton para iniciar seccion que me lleve a inicio
    *en registrarse
      -debe haber un formulario donde se pueda ingresar informacion para hacer login y perfil
      -debe haber un boton que diga registrarse y al hacer clic registre al usuario y haga a la vez lo que hace el boton iniciar seccion es decir renderizar ese componente para hacer login
    ? investigar que otras cosas debe tener el login e iniciar seccion
*/