import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = (props) => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const resetear = () => {
        setContador(0)
    }

    const addOn = () => {
        
    }

    return (
        <div id="contador">
            <Button variant="primary" onClick={sumar}>+</Button>
            <p>{contador}</p>
            <Button variant="primary" onClick={restar}>-</Button>
            <Button variant="primary" onClick={addOn}>Agregar</Button>
            <Button variant="primary" onClick={resetear}>Restablecer</Button>
        </div>
    )
}

export default ItemCount;