import { cartContext } from "../context/CartContext";
import { useContext } from "react";


const CartWidget = () => {
    const { totalProds } = useContext(cartContext);

    return (
      <h4>🛒{totalProds}</h4>
    )
}

export default CartWidget;