import React from 'react'

const CartItemCheckout = (props) => {
    return (
        <tr> 
            <td>{props.item.product.name} {props.item.product.descripcion}</td>
            <td>$ {props.item.product.price}</td>
            <td>{props.item.contador}</td>
            <td>$ {props.item.product.price * props.item.contador}</td>
        </tr>
    )
}

export default CartItemCheckout;