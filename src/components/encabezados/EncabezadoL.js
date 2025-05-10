import React from "react";
import Navbar from "../menus/navbar";

function EncabezadosL({ toggleFormContainer }) {
    return (
        <header>
            <h2 className="logo">Inmotech</h2>
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburguer">&#9776</label>
            <Navbar toggleFormContainer={toggleFormContainer} />
        </header>
    );
}

export default EncabezadosL;