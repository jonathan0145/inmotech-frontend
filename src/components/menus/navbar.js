import React from 'react';
import BotonMenuFacil from '../botones_menu/boton_menu_facil';
import BotonFacil2 from '../botones/BotonFacil2';

function Navbar({ toggleFormContainer }) {
  return (
    <nav className="navbar">
      <BotonMenuFacil enlace={"#"} texto="Inicio" />
      <BotonMenuFacil enlace={"#"} texto="Sobre nosotros" />
      <BotonMenuFacil enlace={"#"} texto="Servicios" />
      <BotonMenuFacil enlace={"#"} texto="Contacto" />
      <BotonFacil2 texto="Login" onClick={toggleFormContainer} />
    </nav>
  );
}

export default Navbar;