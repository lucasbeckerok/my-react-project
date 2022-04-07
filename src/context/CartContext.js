import { createContext , useState , useEffect } from 'react';
import { toast } from "react-toastify";

export const cartContext = createContext([]);
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        checkTotal();
    }, [cart]);

    // addToCart
    const addToCart = (product, contador) => {
        const cartProduct = {product, contador}
        let cartAux = [cart];

        if (isInCart(product)){
            cartProduct = product.find((item) => item.product === product);
            cartProduct.contador = cartProduct.contador + contador;
            cartAux = [...cart];
        } else {
            cartAux = [cartProduct, ...cart];
            toast.success("Agregaste " + contador + " productos al carrito!");
            setCart(cartAux);
        }
    }

    //removeItem
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.product.id !== id));      
    }

    //clearCart
    const clearCart = () => {
        setCart([]);
    }

    //isInCart
    const isInCart = (product) => {
        if (cart) {
            cart.some((item) => item.product.id === product.id);
        }
    };

    //checkTotal
    const checkTotal = () => {
        let totalAux = 0;
        cart.map((item) => {
            totalAux = totalAux + item.product.price * item.contador;
        });
        setTotalPrice(totalAux);
    };
    return (

        <Provider
        value={{
            addToCart,
            removeItem,
            clearCart,
            cart,
            totalPrice

        }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider;
