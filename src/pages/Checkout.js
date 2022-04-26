import { dbFirebase } from "../FirebaseConfig";
import { cartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import validator from "validator";
import { getAuth } from "firebase/auth";
import CartItem from "../pages/CartItem";

const CartCheckout = () => {
    const useCartContext = useContext(cartContext);

    const auth = getAuth();
    const user = auth.currentUser;


    const { totalPrice, cartCheckout, cart, removeItem } = useCartContext;

    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerEmailConf, setBuyerEmailConf] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validEmailConf, setValidEmailConf] = useState(false);
    const [validPhone, setValidPhone] = useState(false);

    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        const ordersCollection = collection(dbFirebase, "orders");
        const order = addDoc(ordersCollection, newOrder);

        order.then((res) => {
            const orderId = res.id;
            cartCheckout(orderId);
        })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleNameChange = (e) => {
        setBuyerName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setBuyerEmail(e.target.value);
    }

    const handleEmailConfChange = (e) => {
        setBuyerEmailConf(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setBuyerPhone(e.target.value);
    }

    useEffect(() => {
        setValidName(validator.isAlpha(buyerName, "es-ES", { ignore: " " }));
        setValidEmail(validator.isEmail(buyerEmail));
        setValidEmailConf(validator.equals(buyerEmail, buyerEmailConf));
        setValidPhone(validator.isNumeric(buyerPhone, "es-ES"));
    }, [buyerName, buyerEmail, buyerEmailConf, buyerPhone]);


    return (
        <>

            <div>

                <div>
                    <h2>Finalizar Pedido</h2>
                    <p>Porfavor revise los datos a continuacion:</p>
                    <h3>Informacion de tu cuenta:</h3>
                    <p>Email: {user.email}</p>
                    <p>ID: {user.uid}</p>
                </div>
                <div>
                    <h3>Tu pedido:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItem key={item.product.id} item={item} removeItem={removeItem} />
                            ))}
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th className="totalContainerCartText"><p>Total</p></th>
                                <th className="totalContainerCartTotal"><p>$ {totalPrice}</p></th>
                            </tr>

                        </tbody>
                    </table>

                    <div>
                        <p className="totalCartText">Total a pagar: ${totalPrice}</p>
                        <button onClick={handleCheckout}>Confirmar Pedido</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartCheckout;