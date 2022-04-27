import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { cartContext } from "../context/CartContext";
import Checkout from "../pages/Checkout";
import User from "./User";
import BeforeRegister from "./BeforeRegister";

const SignUp = () => {

    const { crearUsuario, usuarioCreado } = useContext(authContext);

    return (
        <>
            {usuarioCreado ? <BeforeRegister/> :
                <div className="formContainer_login-signup">
                    <div className="form_login-signup">
                        <h2>Registrarse</h2>
                        <p>Para poder realizar pedidos debe estar registrado</p><br></br>
                        <form onSubmit={crearUsuario}>
                            <label htmlFor="emailField">Email:</label>
                            <input type="email" id="emailField" />
                            <label htmlFor="passwordField">Contraseña:</label>
                            <input type="password" id="passwordField" />
                            <button type="submit"> Registrame</button>
                        </form>
                        <p>¿Ya tenés cuenta? <Link to="/login">Iniciá Sesión aquí</Link></p>
                    </div>
                </div>
            }
        </>
    )
}

export default SignUp;