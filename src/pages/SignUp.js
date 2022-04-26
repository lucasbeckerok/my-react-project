import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const SignUp = () => {

    const { crearUsuario } = useContext(authContext);

    return (
        <div>
            <h2>Registrese</h2>
            <form onSubmit={crearUsuario}>
                <label htmlFor="emailField">Email:</label>
                <input type="email" id="emailField" />
                <label htmlFor="passwordField">Contrasena:</label>
                <input type="password" id="passwordField" />
                <button type="submit"> Registrame</button>
            </form>
            <p>Ya tenés cuenta? <Link to="/login">Iniciá Sesión</Link></p>
        </div>
    )
}

export default SignUp;