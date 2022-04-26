import React from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { cartContext } from "../context/CartContext";


const ItemDetail = (props) => {

  const [botonIrCarrito, setBotonIrCarrito] = useState(true);

  const useCartContext = useContext(cartContext);
  const { addToCart } = useCartContext;

  const onAdd = (contadorActivado) => {
    if (contadorActivado != undefined) {
      setBotonIrCarrito(false);
      addToCart(props.object, contadorActivado);
    }
  }

  return (
    <div>
      <div className="backButtonAndTitle">
        <button onClick={() => { window.history.go(-1) }} className="backButtonAndTitle__item1">
          Ir Atrás
        </button>
        <h2 className="backButtonAndTitle__item2">
          {props.object.name}
        </h2>
        <div className="backButtonAndTitle__item3">
          <Link to="/">
            <button>
              Ir a Home
            </button>
          </Link>
        </div>
      </div>
      <div className="container_itemDetail">
        <div className="itemDetail__img">
          <img src={props.object.img} alt="Foto Producto Detalle"></img>
        </div>
        <div className="itemDetail__descripcion">
          <p><strong>Contenido:</strong> {props.object.descripcion}</p>
          <p><strong>Cantidad disponible: </strong>{props.object.stock} u.</p>
          <p><strong>Precio: </strong>${props.object.price}</p>
          <ItemCount stock={props.object.stock} id={props.id} initial={1} onAdd={onAdd} />
          {botonIrCarrito || <Link to="/cart/"><button> 🛒 Ir al carrito</button></Link>}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;