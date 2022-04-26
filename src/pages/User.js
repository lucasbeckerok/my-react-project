import React, { useContext } from 'react';
import { authContext } from '../context/AuthContext';
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

const User = () => {

  const { cerrarSesion } = useContext(authContext);

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const email = user.email;
    const uid = user.uid;
  }

  return (
    <div className="container_user-page">
      <div className="user-page">
        <h2>Informacion de tu Cuenta: </h2>
        <p>Email: {user.email}</p>
        <p>ID: {user.uid}</p>
        <Link to="/"><button onClick={cerrarSesion}>Cerrar Sesión</button></Link>
      </div>
    </div>
  )
}

export default User;