import React, { useContext } from 'react';
import { cartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';

export const Cart = () => {

    const {cart , removeItem} = useContext(cartContext);
    console.log(cart)

    return (
        <div>
            <ul>
                <li>

                {cart.length === 0 ? <button><Link to="/">No hay Items: Volver a la Tienda</Link></button> : null}
                   
                </li>
                {
                    cart.map(item => {
                        return <li>
                            <p>Nombre: {item.product.name}</p>
                            <p>Precio: $ {item.product.price}</p>
                            <p>Descripcion: {item.product.descripcion}</p>
                            <p>Stock: {item.product.stock}</p>
                            <p>Categoria: {item.product.categoria}</p>
                            <p>Cantidad: {item.contador}</p>
                            <button onClick={()=> removeItem(item.product)}>
                                Eliminar Producto
                            </button>                 
                        </li>
                    })

                }
            </ul>
        </div>
    )
}