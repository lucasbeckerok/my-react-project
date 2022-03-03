import {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Contador from './components/Contador';

const Main = (props) => {

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
            <Button variant="primary" onClick={handleclick}>Aumentar</Button>
            <Button variant="primary" onClick={restar}>restar</Button>
            <Button variant="primary" onClick={resetear}>Reiniciar</Button>
            <Contador/>
        </div>
    </main>
    )
}

export default Main;


// const Main = (props) => {

//     const [loading,setLoading] = useState(true)
//     const [productos, setProductos] = useState([])

//     useEffect(()=> {
//         setTimeout(()=>{
//             setProductos(productosIniciales)
//             setLoading(false)
//         },3000)
//     })

//     console.log(productos)

//     return(
//         <main className="container"></main>
//     )
// }

// export default Main;