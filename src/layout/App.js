import Header from "../layout/Header"
import Main from "../layout/Main"
import Footer from "../layout/Footer"
import CartProvider from "../context/CartContext";
import '../scss/App.scss';
import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <>
        <CartProvider>
            <BrowserRouter>
              <Header/>
              <Main/>
              <Footer/>
            </BrowserRouter>
        </CartProvider>
        </>
    )
}

export default App;