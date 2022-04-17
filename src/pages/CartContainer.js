import React from 'react';
import CartItem from "./CartItem";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";


const CartContainer = () => {
    const useCartContext = useContext(cartContext);
    const { removeItem, cart, totalPrice } = useCartContext;

  return (
            <div className="container_cart">
                <div className="cart__titulo"><h2>Carrito</h2></div>
                <div className="cart__list-products">
                    <h3>Lista de Productos</h3>
                    <table>
                    <thead>
                        <tr>
                            <th>Eliminar</th>
                            <th></th>
                            <th>producto</th>
                            <th>precio</th>
                            <th>cantidad</th>
                            <th>subtotal</th>
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
                                <th>TOTAL</th>
                                <th>$ {totalPrice}</th>
                            </tr>
                        
                    </tbody>
                    </table>
                </div>
                <div className="cart__form">
                    <h3>Form CheckOut</h3>
                </div>
            </div>
        )
}

export default CartContainer;