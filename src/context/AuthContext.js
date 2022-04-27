import React, { } from "react";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext();
const { Provider } = authContext;

const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = React.useState(null);

    const [logueado, setLogueado] = useState(false);
    const [usuarioCreado, setUsuarioCreado] = useState(false);
    
    const auth = getAuth();

    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (usuarioFirebase)=>{
          console.log("Cuenta iniciada con: ", usuarioFirebase)
          setUsuario(usuarioFirebase);
        });
    },[]);

    const crearUsuario = (e) => {
        e.preventDefault();
        const email = e.target.emailField.value;
        const password = e.target.passwordField.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((usuarioFirebase) => {
                const usuario = usuarioFirebase;
                toast.success("Cuenta Creada con éxito: " + usuario.user.email);
                setUsuarioCreado(true);
                setLogueado(true);
            })
            .catch((error) => {
                toast.error("Error al crear usuario: " + error.message + error.code);
            });
    }

    const iniciarSesion = (e) => {
        e.preventDefault();
        const email = e.target.emailField.value;
        const password = e.target.passwordField.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((usuarioFirebase) => {
                const usuario = usuarioFirebase;
                toast.success("Bienvenido, iniciaste sesión con: " + usuario.user.email);
                setLogueado(true);
            })
            .catch((error) => {
                toast.error("Error al iniciar sesión: " + error.message + error.code);
            });
    }

    const cerrarSesion = () => {
        signOut(auth).then(() => {
            toast.info("Cerraste tu sesión, nos vemos pronto!");
            setLogueado(false);
        }).catch((error) => {
            toast.error("Ocurrió un error al Cerrar Sesión: " + error.message + error.code);
        })
    }
    
    return (
        <Provider
            value={{
                crearUsuario,
                iniciarSesion,
                cerrarSesion,
                logueado,
                usuarioCreado,
                usuario
            }}>
            {children}
        </Provider>
    )
}

export default AuthProvider;