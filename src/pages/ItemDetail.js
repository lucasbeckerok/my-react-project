import React from 'react';
import ItemCount from './ItemCount';
 
const ItemDetail = ({ object = {} }) => {

  return (
    <div className="container_itemDetail">
      <div className="itemDetail__titulo">
      <h2>{object.name}</h2>
      </div>
      <div className="itemDetail__img">
      <img src={object.img} alt="Foto Producto Detalle"></img>
      </div>
      <div className="itemDetail__descripcion">
        <p><strong>Contenido:</strong> {object.descripcion}</p>
        <p><strong>Cantidad disponible: </strong>{object.stock} u.</p>
        <p><strong>Precio: </strong>${object.price}</p>
        <ItemCount stock={object.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail;