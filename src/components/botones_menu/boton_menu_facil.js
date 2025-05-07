import React from 'react';
import '../../styles/botones_menu/boton_menu_facil.css'; // Asegúrate de crear un archivo CSS para los estilos

function BotonMenuFacil({ enlace, texto}) {
  return (
      <a href={enlace}>{texto}</a>
  );
}
export default BotonMenuFacil;