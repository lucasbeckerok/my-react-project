import Item from "./Item"
import { useState, useEffect } from "react"

let productsInitial = [
    { name: "Papas Fritas", img: "../images/producto1.jpg", price: 150, stock: 5 },
    { name: "Gaseosa", img: "", price: 200, stock: 8 },
    { name: "Chocolate", img: "", price: 300, stock: 5 },
    { name: "Cigarros", img: "", price: 200, stock: 10 }
]

const ItemList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsInitial);
        }, 1000)}, []);

    return (
        <>
            {products.map((product) => {
                return <Item name={product.name} price={product.price} stock={product.stock} img={product.img}/>
            })}
        </>
    )
}

export default ItemList;