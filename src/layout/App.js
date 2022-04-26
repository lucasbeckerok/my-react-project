import Header from "../layout/Header"
import Main from "../layout/Main"
import Footer from "../layout/Footer"
import CartProvider from "../context/CartContext";
import '../scss/App.scss';
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../context/AuthContext";

function App() {

    return (
        <>
            <AuthProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Header />
                        <Main />
                        <Footer />
                    </BrowserRouter>
                </CartProvider>
            </AuthProvider>
        </>
    )
}

export default App;