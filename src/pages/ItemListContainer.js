import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getDocs, query, doc, getDoc, collection, where } from "firebase/firestore";
import { dbFirebase } from "../FirebaseConfig";

const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { categoria } = useParams();

    useEffect(() => {
      setLoading(true);
      if(categoria !== undefined){
        const documentosFiltrados = getDocs(query(collection(dbFirebase,"productos"), where("categoria", "==", categoria)));
        documentosFiltrados
        .then((snapshot) => {
          setProducts(snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id})
          ));
        })
        .catch(() => {
          toast.error("Ops! ocurrió un error al cargar");
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        }) 
      }else{
        const documents = getDocs(collection(dbFirebase,"productos"));
        documents
        .then((snapshot) => {
          setProducts(snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id})
          ));
        })
        .catch(() => {
          toast.error("Ops! ocurrió un error al cargar");
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
      }
    }, [categoria]);

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