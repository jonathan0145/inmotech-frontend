import React from "react";
import '../../styles/botones/BotonFacil2.css';

function BotonFacil2({ texto, onClick }){
    return (
        <button class="navbar-btn" onClick={onClick}>{ texto }</button>
    )
}

export default BotonFacil2;