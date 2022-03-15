import { useState } from "react";
import { Link } from 'react-router-dom'


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
    const addOn = () => {
    }

    return (
        <>
        <div id="contador" className="row">
            <button onClick={restar} className="col-3">-</button>
            <div className="col-3">{contador}</div>
            <button onClick={sumar} className="col-3">+</button>
            <button onClick={addOn} className="col-3">Agregar al Carrito</button> 
        </div>
        {/* <Link to="/item/:id"><button>Ver Detalles</button></Link> */}
        </>
    )
}

export default ItemCount;
