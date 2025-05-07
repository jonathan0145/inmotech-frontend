import EncabezadosL from '../components/encabezados/EncabezadoL';
import '../styles/pages/login.css';
import InputG from '../components/inputs/InputG';


function LoginPage() {

  return (
    <div id='login'>
      <EncabezadosL/>
      <InputG etiqueta="" nombre="email" texto1="Email"/>
    </div>
  );
}

export default LoginPage;