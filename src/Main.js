import {useState} from 'react'

const Main = (props) => {

    // const resultado = useState(); // Siempre retorna un array con dos elementos

    // let contador = 0

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
    <main>
        <div id="presentacion">
            <h1>bienvenido {props.nombre} {props.apellido} a la tienda e-commerce</h1>
            <h2>Mi contador actual: {contador}</h2>
            <button onClick={handleclick}>Aumentar</button>
            <button onClick={restar}>restar</button>
        </div>
    </main>
    )
}

export default Main;