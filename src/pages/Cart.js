import React, { useContext } from 'react';
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import CartContainer from "./CartContainer";


export const Cart = () => {

    const {cart} = useContext(cartContext);
    console.log(cart)

    return (
        <div>
            {
            cart.length === 0 ?
            <button><Link to="/">No hay Items: Volver a la Tienda</Link></button>
            : <CartContainer/>
            } 
        </div>
    )
}