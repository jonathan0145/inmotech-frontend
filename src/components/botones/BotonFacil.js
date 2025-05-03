import React from "react";
import '../../styles/botones/BotonFacil.css';

function BotonFacil({ texto, onClick }){
    return (
        <button class="my-btn custom-btn" type="button" onClick={onClick}>{ texto }</button>
    )
}

export default BotonFacil;