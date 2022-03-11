import Header from "../layout/Header"
import Main from "../layout/Main"
import Footer from "../layout/Footer"
// import { Fragment } from 'react';
import '../scss/App.scss';

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