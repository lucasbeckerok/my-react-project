import ItemListContainer from '../pages/ItemListContainer'
import '../scss/App.scss';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import { Route , Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Cart } from "../pages/Cart";

const Main = () => {

    return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer position="top-right" />
    </main>
    )
}

export default Main;