import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";
import { where, getDocs, query, collection } from "firebase/firestore";
import { dbFirebase } from "../FirebaseConfig";


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [object, setObject] = useState({});
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const documentosFiltrados = getDocs(query(collection(dbFirebase, "productos"), where("id", "==", id)));
        documentosFiltrados.then((snapshot) => {
          setObject(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0]);
        })
        .catch(() => {
          toast.error("Ops! ocurrió un error al cargar");
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
      },[id]);

  return (
    <>
    <div>
    {loading ? <h2>Cargando Detalle del Producto...</h2> : <ItemDetail object={object} />}
    {error && <h2>Ocurrio un error al cargar la pagina, por favor intente mas tarde</h2>}
    </div>
    </>
  )
}

export default ItemDetailContainer;