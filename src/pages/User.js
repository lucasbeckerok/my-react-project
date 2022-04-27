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
      <Link to="/"><button>Ir a Inicio</button></Link>
      <h2>Informacion de tu Cuenta: </h2>
      <div className="user-page">  
        <p><strong>Email: </strong>{user.email}</p><br></br>
        <p><strong>ID: </strong>{user.uid}</p>
      </div>
      <Link to="/"><button onClick={cerrarSesion}>Cerrar Sesión</button></Link>
    </div>
  )
}

export default User;