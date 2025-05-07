import React from "react";
// import '../../styles/botones/BotonFacil2.css';

function InputG({etiqueta, nombre, texto1}){
    return (
        <div class="input-box">
            <span class="icon">{etiqueta}</span>
            <input type={nombre} required />
            <label for={nombre}>{texto1}</label>
        </div>
    );
}

export default InputG;