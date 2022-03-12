import ItemList from "./ItemList"
import { useState, useEffect } from "react"

let productsInitial = [
    { id: 1, name: "Papas Fritas", descripcion:"250 gr.", img: "./img/papas.jpg", price: 150, stock: 5 },
    { id: 2, name: "Gaseosa", descripcion: "250 ml.", img: "./img/gaseosa.jpg", price: 200, stock: 8 },
    { id: 3, name: "Chocolate", descripcion: "400 gr.", img: "./img/chocolate.jpg", price: 300, stock: 5 },
    { id: 4, name: "Cigarros", descripcion: "pack de 20 cigarrillos", img: "./img/cigarro.jpg", price: 200, stock: 10 }
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
            {loading ? <h2>Cargando Productos... Por favor aguarde</h2> : <div className="cards"><ItemList products={products} /></div>}
        </>
    )
}

export default ItemListContainer;