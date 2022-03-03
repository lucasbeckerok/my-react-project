import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
//----
import { Fragment } from 'react';
import '../src/scss/App.scss';
import ItemListContainer from './components/ItemListContainer';

function App() {

    const edad = 28;
    const nombre = ["Juan", "Pedro"];

    return (
        <>
            <Header main="main-header"/>
            <Fragment className="App">
                <ItemListContainer greeting="Proximamente nuevos productos" />
            </Fragment> 
            <Main main="main-body" className={edad} className={nombre} initial={0}/>
            <Footer footer="main-footer"/>
        </>
    )
}

export default App