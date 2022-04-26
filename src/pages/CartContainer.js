import React from 'react';
import CartItem from "./CartItem";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { authContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const CartContainer = (props) => {
    const useCartContext = useContext(cartContext);
    const { removeItem, cart, totalPrice, clearCart } = useCartContext;
    const { usuario} = useContext(authContext);

    return (
        <div className="cart__list-products">
            <h2> 🛒 Carrito</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <CartItem key={item.product.id} item={item} removeItem={removeItem} />
                    ))}
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="totalContainerCartText"><p>Total</p></th>
                        <th className="totalContainerCartTotal"><p>$ {totalPrice}</p></th>
                    </tr>

                </tbody>
            </table>
            <div className="containerBotonesCart">
                <button onClick={clearCart} className="botonCartClear">
                    ❎ Vaciar Carrito
                </button>
                <Link to="/">
                    <button>
                    🛍️ Seguir Comprando
                    </button>
                </Link>
                { usuario != null ?
                <Link to="/checkout"><button className="botonCartFinalizar">☑️ Finalizar Pedido</button></Link>
                : <Link to="/signup"><button className="botonCartFinalizar">☑️ Registrarme y Finalizar Pedido</button></Link>
                }
            </div>
        </div>
    )
}

export default CartContainer;