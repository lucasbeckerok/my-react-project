import { useState } from "react";

const ItemCount = (props) => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        if (contador < props.stock) {
        setContador(contador + 1)
        }
    }
    const restar = () => {
        setContador(contador - 1)
        if (contador < 1) {
            setContador(0)
        }
    }
    const resetear = () => {
        setContador(0)
    }
    const addOn = () => {
    }
    return (
        <div id="contador">
            <button  onClick={restar}>-</button>
            <h4>{contador}</h4>
            <button onClick={sumar}>+</button>
            <button onClick={addOn}>Agregar al Carrito</button>
            <button onClick={resetear}>Restablecer</button>
        </div>
    )
}

export default ItemCount;