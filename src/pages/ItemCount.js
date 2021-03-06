import { useState } from "react";

const ItemCount = (props) => {

    const [contador, setContador] = useState(props.initial);

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

    const addToCart = () => {
        props.onAdd(contador)
    }

    return (
        <>
            <div id="contador" className="row">
                <button onClick={restar} className="col-3">-</button>
                <div className="col-3"><h4>{contador}</h4></div>
                <button onClick={sumar} className="col-3">+</button>
                <button onClick={addToCart} className="col-3">Agregar al Carrito</button>
            </div>
        </>
    )
}

export default ItemCount;