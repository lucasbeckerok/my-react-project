import ItemListContainer from '../pages/ItemListContainer'
import '../scss/App.scss';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import { Route , Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from "../pages/Cart";
import Login from "../pages/Login";
import User from "../pages/User";
import Checkout from "../pages/Checkout";
import SignUp from '../pages/SignUp';

const Main = () => {

    return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/user" element={<User />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer position="top-right" />
    </main>
    )
}

export default Main;