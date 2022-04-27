import { dbFirebase } from "../FirebaseConfig";
import { cartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import CartItemCheckout from "../pages/CartItemCheckout";
import ItemListContainer from "./ItemListContainer"

const CartCheckout = (props) => {
    const useCartContext = useContext(cartContext);

    const auth = getAuth();
    const user = auth.currentUser;

    const { totalPrice, cartCheckout, cart, removeItem } = useCartContext;

    const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

    const handleCheckout = () => {
        const newOrder = {
            buyer: {
                email: user.email
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
            setPedidoFinalizado(true);
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>

        { 
        pedidoFinalizado ? 
        <ItemListContainer/>
        :
            <div className="containerCheckout">
                <h2>Finalizar Pedido</h2>
                <p>Porfavor revise los datos a continuacion:</p>
                <h3>Informacion de tu cuenta:</h3>
                <div className="userInformationCheckout">
                    
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>ID: </strong> {user.uid}</p>
                </div>
                <div>
                    <h3>Tu pedido:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <CartItemCheckout key={item.product.id} item={item} />
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <p className="totalCartText">Total a pagar: ${totalPrice}</p>
                    </div>
                    <button onClick={handleCheckout}> ✅ Confirmar Compra</button>
                </div>
            </div>
        }
        </>
    )
}
export default CartCheckout;