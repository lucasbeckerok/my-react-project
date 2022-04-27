import { dbFirebase } from "../FirebaseConfig";
import { cartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import CartItem from "../pages/CartItem";
import ItemListContainer from "./ItemListContainer"

const CartCheckout = () => {
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
        }
        </>
    )
}
export default CartCheckout;