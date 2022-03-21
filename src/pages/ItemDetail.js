import React from 'react';
import ItemCount from './ItemCount';
import { toast } from "react-toastify";
import { useState } from "react";
import CartWidget from "../widgets/CartWidget";
import Cart from "./Cart";
 
const ItemDetail = (props) => {

  const [agregado, setAgregado] = useState(false);
  
  const onAdd = (agregado) => {
    if (agregado != undefined) {
      setAgregado(true);
    }
    toast.success("Agregaste " + agregado + " producto/s a tu Carrito")
  }

  return (
    <div className="container_itemDetail">
      <div className="itemDetail__titulo">
      <h2>{props.object.name}</h2>
      </div>
      <div className="itemDetail__img">
      <img src={props.object.img} alt="Foto Producto Detalle"></img>
      </div>
      <div className="itemDetail__descripcion">
        <p><strong>Contenido:</strong> {props.object.descripcion}</p>
        <p><strong>Cantidad disponible: </strong>{props.object.stock} u.</p>
        <p><strong>Precio: </strong>${props.object.price}</p>
        {agregado ? <CartWidget/> : <ItemCount stock={props.object.stock} id={props.id} initial={1} onAdd={onAdd} /> }
      </div>
    </div>
  )
}

export default ItemDetail;