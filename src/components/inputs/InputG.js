import React from "react";
// import '../../styles/inputs/InputG.css';

function InputG({ icon: Icon, nombre, texto1 }) {
    return (
        <div className="input-box">
            <span className="icon">
                {Icon && <Icon />} {/* Renderiza el icono si se proporciona */}
            </span>
            <input type={nombre} required />
            <label htmlFor={nombre}>{texto1}</label>
        </div>
    );
}

export default InputG;