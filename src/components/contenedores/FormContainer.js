import React, { useState } from "react";
import FormBoxClass from "./FormBoxClass";
import { IoIosCloseCircle } from "react-icons/io";

function FormContainer({ isActive }) {
    const [isPopupActive, setIsPopupActive] = useState(true);

    const togglePopup = () => {
        setIsPopupActive(!isPopupActive);
    };

    return (
        <div className={`form-container ${isPopupActive ? 'active-popup' : '' }`}>
            <span className="close-icon" onClick={togglePopup}>
                <IoIosCloseCircle />
            </span>
            <FormBoxClass className="login" title="Login"/>
            <FormBoxClass className="register" title="Registrate"/>
        </div>
    );
}

export default FormContainer;