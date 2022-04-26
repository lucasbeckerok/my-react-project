import { cartContext } from "../context/CartContext";
import { useContext } from "react";
import { FaShoppingBag } from 'react-icons/fa';


const CartWidget = () => {
    const { totalProds } = useContext(cartContext);

    return (
      <div><FaShoppingBag/> {totalProds}</div>
    )
}

export default CartWidget;