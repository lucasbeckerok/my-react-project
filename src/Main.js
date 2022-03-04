import ContadorCard from './components/Card';
import DarkMode from './components/DarkToggle';
import Slider from './components/Slider';
import { Fragment } from 'react';
import '../src/scss/App.scss';
import ItemListContainer from './components/ItemListContainer';

const Main = () => {

    return (
    <main>
        <Fragment className="App">
                <ItemListContainer greeting="Proximamente mas productos!"/>
        </Fragment>
        <div id="presentacion">
            <Slider/>
        </div>
        <div>
            <ContadorCard/>
            <DarkMode/>
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