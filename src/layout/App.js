import Header from "../layout/Header"
import Main from "../layout/Main"
import Footer from "../layout/Footer"
// import { Fragment } from 'react';
import '../scss/App.scss';
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <>
        <BrowserRouter>
            <Header/>
            <Main initial={0}/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}

export default App;