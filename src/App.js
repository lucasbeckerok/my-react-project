import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { Fragment } from 'react';
import '../src/scss/App.scss';

function App() {

    return (
        <>
            <Header/>
            <Main initial={0}/>
            <Footer/>
        </>
    )
}

export default App;