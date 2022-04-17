import React from 'react';
import CartItem from "./CartItem";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


const CartContainer = () => {
    const useCartContext = useContext(cartContext);
    const { removeItem, cart, totalPrice, clearCart } = useCartContext;

  return (
            <div className="container_cart">
                <div className="cart__titulo">
                    <h2>Carrito</h2>
                </div>
                <div className="cart__list-products">
                    <h3>Productos en Carrito</h3>
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
                                <th><h3>Total :</h3> </th>
                                <th><h3>$ {totalPrice}</h3></th>
                            </tr>
                        
                    </tbody>
                    </table>
                    <div>
                        <Link to="/">
                            <button>
                                Seguir Comprando
                            </button>
                        </Link>
                    <button onClick={clearCart}>
                        Vaciar Carrito
                    </button>
                    </div>
                </div>
                <div className="cart__form">
                    <h3>Form CheckOut</h3>
                </div>
            </div>
        )
}

export default CartContainer;