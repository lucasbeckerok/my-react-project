import { createContext , useState , useEffect } from 'react';
import { toast } from "react-toastify";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProductos, setTotalProductos] = useState(0);

    useEffect(() => {
        setCart(cart)
        calcularTotal(cart);
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

    const calcularTotal = (cart) => {
        let totalPrice = 0;
        let totalProds = 0;
        cart.forEach(item => {
            totalPrice += item.product.price * item.contador;
            totalProds += item.contador;
        });
        setTotalPrice(totalPrice);
        setTotalProductos(totalProds);
    }

    //removeItem
    const removeItem = (id) => {
        setCart(cart.filter((item) => item.product.id !== id));      
    }

    //clearCart
    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalProductos(0);
    }

    //isInCart
    const isInCart = (product) => {
        if (cart) {
            cart.some((item) => item.product.id === product.id);
        }
    };

    //checkTotal
    // const checkTotal = () => {
    //     let totalAux = 0;
    //     cart.map((item) => {
    //         totalAux = totalAux + item.product.price * item.contador;
    //     });
    //     setTotalPrice(totalAux);
    // };


    return (

        <Provider
        value={{
            addToCart,
            removeItem,
            clearCart,
            cart,
            totalPrice,
            totalProductos

        }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider;
