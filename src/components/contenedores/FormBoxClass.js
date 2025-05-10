import React from "react";
import InputG from '../inputs/InputG';
import { IoIosMail } from "react-icons/io";
import { FaMailchimp } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io"; // Importa el icono de candado
import Btn from '../botones/Btn';

function FormBoxClass({ className, title }) {
    return (
        <div className={`formbox ${className}`}>
            <h2>{title}</h2>
            <form action="#">
                {className === "login" && (
                    <>
                        <InputG icon={IoIosMail} nombre="email" texto1="Email" />
                        <InputG icon={FaMailchimp} nombre="email" texto1="Mono" />
                        <div class="forget-remember">
                        <label for=""><input type="checkbox"/>Recordar contraseña</label>
                            <a href="#">¿Olvidaste la contraseña?</a>
                        </div>
                        <Btn texto="Ingresar" />
                        <div class="reg-login">
                            <p>¿No tienes una cuenta? <a href="#" class="reg-link">Registrate</a></p>
                        </div>
                    </>
                )}
                {className === "register" && (
                    <>
                        <InputG icon={IoIosMail} nombre="email" texto1="Email" />
                        <InputG icon={FaMailchimp} nombre="email" texto1="Mono" />
                        <InputG icon={IoIosLock} nombre="password" texto1="Contraseña" />
                        <div class="forget-remember">
                            <label for=""><input type="checkbox" />Acepto los <a class="terms-conditions" href="#">términos & condiciones</a></label>
                        </div>
                        <Btn texto="Registrarse" />
                        <div class="reg-login">
                            <p>¿Ya tienes una cuenta? <a href="#" class="log-link">Ingresar</a></p>
                        </div>
                    </>
                )}
            </form>
        </div>
    );
}

export default FormBoxClass;