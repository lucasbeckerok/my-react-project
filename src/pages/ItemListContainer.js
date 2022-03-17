import ItemList from "./ItemList"
import { useState, useEffect } from "react"

export const productsInitial = [
    { id: 1, name: "Papas Fritas", descripcion:"250 gr.", img: "./img/papas.jpg", price: 150, stock: 5 },
    { id: 2, name: "Gaseosa", descripcion: "250 ml.", img: "./img/gaseosa.jpg", price: 200, stock: 8 },
    { id: 3, name: "Chocolate", descripcion: "400 gr.", img: "./img/chocolate.jpg", price: 300, stock: 5 },
    { id: 4, name: "Cigarrillos", descripcion: "pack de 20 cigarrillos", img: "./img/cigarro.jpg", price: 200, stock: 10 },
    { id: 5, name: "Chupetin", descripcion:"250 gr.", img: "./img/chupetin.jpg", price: 150, stock: 4 },
    { id: 6, name: "Galletitas", descripcion:"200 gr.", img: "./img/galletas.jpg", price: 150, stock: 3 },
    { id: 7, name: "Snickers", descripcion:"100 gr.", img: "./img/snickers.jpg", price: 150, stock: 8 },
    { id: 8, name: "Turrón", descripcion:"250 gr.", img: "./img/turron.jpg", price: 150, stock: 8 }
]

const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {

      const productPromise = new Promise((res,rej) => {

        setTimeout(() => {
  
          res(productsInitial);
  
          }, 2000)
  
      },)

      productPromise
      .then((data) => setProducts(data))
      .catch((error) => console.log(error))
      .finally(() => {
          setLoading(false);
        })
      })

    return (
        <>
        <div>
          {loading ? <h2>Cargando Productos... Por favor aguarde</h2> : <div className="cards"><ItemList products={products} /></div>}
        </div>
        </>
    )
}

export default ItemListContainer;