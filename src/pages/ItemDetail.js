import React from 'react';

const ItemDetail = (props) => {
  return (
    <article className="card">
        <img src={props.object.img} alt="Sample photo"></img>
         <div className="text">
           <h4>{props.object.name}</h4>
            <p>Contenido: {props.object.descripcion}
                Stock: {props.object.stock}
              <ItemCount stock={props.object.stock}/>
            </p>
        </div>
    </article>
  )
}

export default ItemDetail;