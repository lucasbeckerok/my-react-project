import { useContext } from 'react';
import { cartContext } from "../context/CartContext";
import React from 'react'

const CartItem = (props) => {
    const useCartContext = useContext(cartContext);
    const { removeItem } = useCartContext; 

  return (
            <tr>
                <td>
                    <button onClick={()=> removeItem(props.item.product)}>
                    X
                    </button>
                </td>
                <td>
                <img src={props.item.product.img} className="imgCarrito" alt="Foto Producto Carrito"></img>
                </td>
                <td>{props.item.product.name} {props.item.product.descripcion}</td>
                <td>$ {props.item.product.price}</td>
                <td>{props.item.contador}</td>
                <td>$ {props.item.product.price * props.item.contador}</td>
            </tr>
  )
}

export default CartItem;