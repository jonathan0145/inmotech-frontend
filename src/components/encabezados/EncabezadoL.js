import React from "react";
import '../../styles/encabezados/EncabezadosL.css';
import Navbar from "../menus/navbar";

function EncabezadosL(){
    return (
        <header>
            <h2 class="logo">logo</h2>

                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburguer">&#9776</label>
                <Navbar/>
        </header>
    )
}

export default EncabezadosL;