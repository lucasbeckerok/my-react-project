import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const productsInitial = [
    { id: 1, name: "Papas Fritas Lay's", categoria: "snacks", descripcion:"250 gr.", img: "https://www.almacensanjose.cl/wp-content/uploads/2020/10/Papas-Lays-Corte-Americano-320gr-min-1.jpg", price: 150, stock: 5 },
    { id: 2, name: "Pepsi", categoria: "bebidas", descripcion: "250 ml.", img: "https://media.tradeholding.com/attach/hash92/148060/pepsi_reg_can_33.jpg", price: 100, stock: 8 },
    { id: 3, name: "Cola-Cola", categoria: "bebidas", descripcion: "250 ml.", img: "https://www.h2o-ci.com/wp-content/uploads/2012/04/coca-cola-can.jpg", price: 95, stock: 8 },
    { id: 4, name: "Chocolate Milka", categoria: "chocolates", descripcion: "400 gr.", img: "https://lojasantoantonio.vteximg.com.br/arquivos/ids/158898-420-420/36124-Chocolate-Milka-Hazelnut-100G-MONDELEZ.jpg", price: 300, stock: 5 },
    { id: 5, name: "Cigarrillos Malboro", categoria: "cigarrillos",descripcion: "pack de 20 cigarrillos", img: "http://tacticalintercept.com/store/222-large_default/r-071-cigarette-pack-audio-transmitter.jpg", price: 200, stock: 10 },
    { id: 6, name: "Chupetin bom bom bum", categoria: "snacks", descripcion:"250 gr.", img: "https://dojiw2m9tvv09.cloudfront.net/57587/product/X_16144410904551614441090455.png", price: 90, stock: 4 },
    { id: 7, name: "Galletitas Maná ", categoria: "snacks", descripcion:"200 gr.", img: "https://www.pasosonline.com.ar/wp-content/uploads/2018/08/1007201.jpg", price: 150, stock: 3 },
    { id: 8, name: "Chocolate Snickers", categoria: "chocolates", descripcion:"100 gr.", img: "https://marketpedidoslima.pe/images/slideshow/snickers-52_7g.png", price: 150, stock: 8 },
    { id: 9, name: "Turrón Arcor", categoria: "snacks", descripcion:"250 gr.", img: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/450/1205/turron__87058.1646309952.jpg", price: 80, stock: 8 }
]

const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { categoria } = useParams();

    useEffect(() => {

      const productPromise = new Promise((res,rej) => {
        setTimeout(() => {
          res(productsInitial);
          }, 1500)
      },)

      productPromise
      .then((res) => {
        if (categoria != undefined) {
          const productosFiltrados = productsInitial.filter(product => product.categoria == categoria);
          setProducts(productosFiltrados)
        } else {
          setProducts(res)
        }

      })
      .catch((rej) => {
        toast.error("ha ocurrido un error");
        setError(true);
      })
      .finally(() => {
          setLoading(false);
        })
      }, [categoria])

    return (
        <>
        <div>
          {loading ? <h2>Cargando Productos...</h2> : <div className="cards"><ItemList products={products} /></div>}
          {error && <h2>ha ocurrido un error al cargar la pagina</h2>}
        </div>
        </>
    )
}

export default ItemListContainer;