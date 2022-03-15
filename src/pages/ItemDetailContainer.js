import React from 'react'
import { useState, useEffect } from 'react';
import { productsInitial } from "./ItemListContainer";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState();
    const [object, setObjet] = useState([]);
    const [error, setError] = useState(false);
    const { id } = useParams();

    useEffect(() => {

        const productPromise = new Promise((res,rej) => {
  
          setTimeout(() => {
    
            res(productsInitial);
    
            }, 2500)
    
        },)
  
        productPromise
        .then((res) => {
            let detalleItem = productsInitial.find(product => {
                return product.id === id;
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
    {loading ? <h2>Cargando Productos... Por favor aguarde</h2> : <div className="cards"><ItemDetail object={object} /></div>}
    {error && <h2>Ocurrio un error al cargar la pagina, por favor intente mas tarde</h2>}
    </div>
    </>
  )
}

export default ItemDetailContainer;