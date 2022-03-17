import ItemCount from './ItemCount';
import { Link } from "react-router-dom";

const Item = (props) => {

    return (
      
      <article className="card">
        <img src={props.img} alt="Sample photo"></img>
        <div className="text">
          <h4>{props.name}</h4>
            <p>Contenido: {props.descripcion}
                Stock: {props.stock}</p>
        </div>
        <ItemCount stock={props.stock} id={props.id}/>
        <Link to="/item/:id"><button>Ver Detalles</button></Link>
      </article>
    )
}
export default Item;