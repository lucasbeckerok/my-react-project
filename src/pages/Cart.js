import React, { useContext } from 'react';
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import CartContainer from "./CartContainer";


export const Cart = () => {

    const {cart} = useContext(cartContext);

    return (
        <div>
            {
            cart.length === 0 ?
            <div>
                <h3>No hay Productos en el carrito</h3>
                <Link to="/">
                        <button>
                            Volver a la tienda
                        </button>
                </Link>
            </div>
            : <CartContainer/>
            }
        </div>
    )
}