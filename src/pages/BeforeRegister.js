import React, { useContext } from 'react';
import { cartContext } from "../context/CartContext";
import Checkout from "../pages/Checkout";
import User from "./User";


const BeforeRegister = () => {

    const { cart } = useContext(cartContext);

    return (
        <>
            {cart.length !== 0 ? <Checkout/> : <User/> }
        </>
    )
}

export default BeforeRegister;