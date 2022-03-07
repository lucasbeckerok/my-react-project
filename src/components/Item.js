import ItemCount from './ItemCount';
import { Card } from "react-bootstrap";


const Item = (props) => {
  
    return (
        <Card 
          style={{ width: '18rem' }}
          id="itemStore"
        >
        <Card.Img variant="top" src={props.img} />
          <Card.Body>
             <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                <p>Stock: {props.stock}</p>
                <ItemCount stock={props.stock}/>
             </Card.Text>
         </Card.Body>
        </Card>
    )
}

export default Item;