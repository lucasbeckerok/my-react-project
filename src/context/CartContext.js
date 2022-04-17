import { createContext , useState , useEffect } from 'react';
import { toast } from "react-toastify";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProds, setTotalProds] = useState(0);

    useEffect(() => {
        setCart(cart)
        calcularTotal(cart);
    }, [cart]);

    let cartAux = [];
    // addToCart
    const addToCart = (product, contador) => {
        const cartProduct = {product, contador}

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
        setTotalProds(totalProds);
    }

    //removeItem
    const removeItem = (product) => {
        if(isInCart(product)) {
            cartAux = cart.filter(item => item.product.name !== product.name);
            setCart(cartAux);
            toast.info(`El producto ${product.name} se eliminó de tu carrito`);
            if (cartAux.lenght === 0) {
                clearCart();
            }
        }
    }

    //clearCart
    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalProds(0);
    }

    //isInCart
    const isInCart = (product) => {
        return cart && cart.some(item => item.product.id === product.id);
    };

    return (

        <Provider
        value={{
            addToCart,
            removeItem,
            clearCart,
            cart,
            totalPrice,
            totalProds

        }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider;
