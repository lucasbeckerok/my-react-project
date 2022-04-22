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
            <h3>Finalizar Compra</h3>
            <div className="formContainer">
            <form>
                <div>
                    <label> Nombre Completo: </label>
                    <input className="formItems" error={buyerName !== "" && !validName} onChange={handleNameChange} value={buyerName} />
                </div>
                <div>
                    <label> Número de Teléfono: </label>
                    <input className="formItems" error={buyerPhone !== "" && !validPhone} onChange={handlePhoneChange} value={buyerPhone} />
                </div>
                <div>
                    <label> Email: </label>
                    <input className="formItems" error={buyerEmail !== "" && !validEmail} onChange={handleEmailChange} value={buyerEmail} />
                </div>
                <div>
                    <label> Confirme Email: </label>
                    <input className="formItems" error={buyerEmailConf !== "" && !validEmailConf} onChange={handleEmailConfChange} value={buyerEmailConf} />
                </div>
            </form>
                <div>
                    <p className="totalCartText">Total a pagar: ${totalPrice}</p>
                    <button onClick={handleCheckout} disabled={(!validName || !validEmail || !validEmailConf || !validPhone)}>Realizar Pedido</button>
                </div>
            </div>
        </>
    )
}
export default CartCheckoutForm;