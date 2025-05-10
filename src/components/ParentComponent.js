import React, { useState } from "react";
import FormContainer from './contenedores/FormContainer';
import BotonFacil2 from './botones/BotonFacil2';

function ParentComponent() {
    const [showFormContainer, setShowFormContainer] = useState(false);

    const toggleFormContainer = () => {
        setShowFormContainer(!showFormContainer);
    };

    return (
        <div>
            <BotonFacil2 texto="Toggle Form" onClick={toggleFormContainer} />
            {showFormContainer && <FormContainer />}
        </div>
    );
}

export default ParentComponent;