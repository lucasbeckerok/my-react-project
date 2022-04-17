import { Link } from "react-router-dom";

const Item = (props) => {

    return (
      
      <article className="card">
        <img src={props.img} alt="foto del producto"></img>
        <div className="card__text">
          <h4>{props.name}</h4>
          <p>Precio: ${props.price}</p>
        </div>
        <Link to={`/item/${props.id}`}><button>Ver Detalles</button></Link>
      </article>
    )
}

export default Item;