import Item from "./Item"
import { useState, useEffect } from "react"

let productsInitial = [
    { name: "Papas Fritas", descripcion:"250 gr.", img: "./img/papas.jpg", price: 150, stock: 5 },
    { name: "Gaseosa", descripcion: "250 ml.", img: "./img/gaseosa.jpg", price: 200, stock: 8 },
    { name: "Chocolate", descripcion: "400 gr.", img: "./img/chocolate.jpg", price: 300, stock: 5 },
    { name: "Cigarros", descripcion: "pack de 20 cigarrillos", img: "./img/cigarro.jpg", price: 200, stock: 10 }
]

const ItemList = () => {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsInitial);
            setLoading(false);
        }, 3000)}, []);

    return (
        <>
            <h2>{loading && "cargando...."}</h2>

            {products.map((product, indice) => {
                return <Item key={indice} name={product.name} descripcion={product.descripcion} price={product.price} stock={product.stock} img={product.img}/>
            })}
        </>
    )
}

export default ItemList;