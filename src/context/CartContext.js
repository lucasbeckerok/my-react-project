import { createContext , useState , useEffect } from 'react';
import { toast } from "react-toastify";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalProds, setTotalProds] = useState(0);

    useEffect(() => {
        setCart(cart);
        calcularTotal(cart);
    }, [cart]);

    let cartAux = [];

    const addToCart = (product, contador) => {

        const cartProduct = {product, contador};

        if (isInCart(product)){
            cartProduct = product.find((item) => item.product.id === product.id);
            cartProduct.contador = cartProduct.contador + contador;
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

    const clearCart = () => {
        setCart([]);
        setTotalPrice(0);
        setTotalProds(0);
    }

    const isInCart = (product) => {
        return cart && cart.some(item => item.product.id === product.id);
    };

    const cartCheckout = (orderId) => {
        toast.success("Felicitaciones su pedido ha sido completado, su numero de orden es: " + orderId );
        clearCart();
    }

    return (

        <Provider
        value={{
            addToCart,
            removeItem,
            clearCart,
            cart,
            totalPrice,
            totalProds,
            cartCheckout
        }}
        >
            {children}
        </Provider>
    )
}

export default CartProvider;
