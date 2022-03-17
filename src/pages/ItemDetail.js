import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ object = {} }) => {

  return (
    <article className="card">
        <img src={object.img} alt="Sample photo"></img>
        <div className="text">
          <h4>{object.name}</h4>
            <p>Contenido: {object.descripcion}
                Stock: {object.stock}</p> 
        </div>
        <ItemCount stock={object.stock}/>
    </article>
  )
}

export default ItemDetail;