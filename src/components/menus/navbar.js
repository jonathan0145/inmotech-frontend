import React from 'react';
import BotonMenuFacil from '../botones_menu/boton_menu_facil';
import BotonFacil2 from '../botones/BotonFacil2';
import '../../styles/menus/Navbar.css'; // Asegúrate de crear un archivo CSS para los estilos

function Navbar() {
  return (
    <nav className="navbar">
        <BotonMenuFacil enlace={"#"} texto="Inicio" />
        <BotonMenuFacil enlace={"#"} texto="Sobre nosotros" />
        <BotonMenuFacil enlace={"#"} texto="Servicios" />
        <BotonMenuFacil enlace={"#"} texto="Contacto" />
        <BotonFacil2 texto="Login"/>
    </nav>
  );
}

export default Navbar;