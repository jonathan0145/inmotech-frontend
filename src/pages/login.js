import React, { useState } from 'react';
import EncabezadosL from '../components/encabezados/EncabezadoL';
import '../styles/pages/login.css';
import FormContainer from '../components/contenedores/FormContainer';

function LoginPage() {
  const [showFormContainer, setShowFormContainer] = useState(false);

  const toggleFormContainer = () => {
    setShowFormContainer(!showFormContainer);
  };

  return (
    <div id='login'>
      <EncabezadosL toggleFormContainer={toggleFormContainer} />
      {showFormContainer && <FormContainer />}
    </div>
  );
}

export default LoginPage;