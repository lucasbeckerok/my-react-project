import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
//----
import { Fragment } from 'react';
import '../src/scss/App.scss';

function App() {

    return (
        <>
            <Header main="main-header"/>
            <Main main="main-body" initial={0} />
            <Footer footer="main-footer"/>
        </>
    )
}

export default App;