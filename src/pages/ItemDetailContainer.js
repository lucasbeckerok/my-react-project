import React from 'react'
import { useState, useEffect } from 'react';
import { productsInitial } from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [object, setObjet] = useState([]);
    const [error, setError] = useState(false);
    const { id } = useParams();    

    const productPromise = new Promise((res,rej) => {
  
      setTimeout(() => {
        res(productsInitial);
        }, 2500)

    },)

    useEffect(() => {

        productPromise
        .then((res) => {
            let detalleItem = res.find(product => {
                return product.id == id;
            })
            setObjet(detalleItem);
        })
        .catch((rej) => {
            toast.error("Ops! ocurrió un error al cargar");
            setError(true);
        })
        .finally(() => {
            setLoading(false);
          })
          
        },[])

  return (
    <>
    <div>
    {loading ? <h2>Cargando Detalle del Producto...</h2> : <div><ItemDetail object={object} /></div>}
    {error && <h2>Ocurrio un error al cargar la pagina, por favor intente mas tarde</h2>}
    </div>
    </>
  )
}

export default ItemDetailContainer;