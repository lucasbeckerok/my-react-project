import { dbFirebase } from "../FirebaseConfig";
import { cartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import validator from "validator";

const CartCheckoutForm = (props) => {
    const useCartContext = useContext(cartContext);
    const { totalPrice, cartCheckout } = useCartContext;
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
            items: props.cart,
            date: serverTimestamp(),
            total: totalPrice
        }
        const ordersCollection = collection(dbFirebase, "orders");
        const order = addDoc(ordersCollection, newOrder);
        order.then((res) => {
            const orderId = res.id;
            cartCheckout(orderId);
        });
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
            <h3>Checkout Information:</h3>
            nombre completo<input className="formItems" error={buyerName !== "" && !validName} required variant="filled" label="Full Name" onChange={handleNameChange} value={buyerName} />
            numero celular<input className="formItems" error={buyerPhone !== "" && !validPhone} required variant="filled" label="Phone Number" onChange={handlePhoneChange} value={buyerPhone} />
            email<input className="formItems" error={buyerEmail !== "" && !validEmail} required variant="filled" label="Email Address" onChange={handleEmailChange} value={buyerEmail} />
            confirm email<input className="formItems" error={buyerEmailConf !== "" && !validEmailConf} required variant="filled" label="Confirm Email Address" onChange={handleEmailConfChange} value={buyerEmailConf} />
            <div>
                <div>
                    <h3>Total a pagar: ${totalPrice}</h3>
                </div>
                <div>
                    <button onClick={handleCheckout} disabled={(!validName || !validEmail || !validEmailConf || !validPhone)}>Realizar compra</button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm