import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { Link } from "react-router-dom";

const Login = () => {

    const { iniciarSesion } = useContext(authContext);

    return (
        <div className="formContainer_login-signup">
            <div className="form_login-signup">
                <h2>Iniciar Sesion</h2>
                <p>Que bueno verte de nuevo por aqui :)</p><br></br>
                <form onSubmit={iniciarSesion}>
                    <label htmlFor="emailField">Email:</label>
                    <input type="email" id="emailField" />
                    <label htmlFor="passwordField">Contraseña:</label>
                    <input type="password" id="passwordField" />
                    <button type="submit">Iniciar Sesion</button>
                </form>
                <p>No tenés cuenta? <Link to="/signup">Registrate</Link></p>
            </div>
        </div>
    )
}

export default Login;