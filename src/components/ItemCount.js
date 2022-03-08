import { useState } from "react";
import { Button } from "react-bootstrap";

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
            <Button variant="primary" onClick={restar}>-</Button>
            <h4>{contador}</h4>
            <Button variant="primary" onClick={sumar}>+</Button>
            <Button variant="primary" onClick={addOn}>Agregar al Carrito</Button>
            <Button variant="secondary" onClick={resetear}>Restablecer</Button>
        </div>
    )
}

export default ItemCount;