import ItemCount from './ItemCount';

const Item = (props) => {

    return (
      
      <article className="card">
        <img src={props.img} alt="Sample photo"></img>
         <div className="text">
           <h4>{props.name}</h4>
            <p>Contenido: {props.descripcion}
                Stock: {props.stock}
              <ItemCount stock={props.stock}/>
            </p>
         </div>
      </article>
    )
}
export default Item;