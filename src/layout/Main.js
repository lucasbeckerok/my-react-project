import ItemListContainer from '../pages/ItemListContainer'
import '../scss/App.scss';
import ItemDetailContainer from '../pages/ItemDetailContainer';
import { Route , Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {

    return (
    <main>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <ToastContainer position="bottom-right" />
    </main>
    )
}

export default Main;