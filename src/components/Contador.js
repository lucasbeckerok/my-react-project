import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = (props) => {

    const [contador, setContador] = useState(props.initial);

    const handleclick = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const resetear = () => {
        setContador(0)
    }

    return (
        <div>
            <h4>Agregar al carrito: {contador}</h4>
            <Button variant="primary" onClick={handleclick}>Aumentar</Button>
            <Button variant="primary" onClick={restar}>restar</Button>
            <Button variant="primary" onClick={resetear}>Reiniciar</Button>
        </div>
    )
}

export default Contador;