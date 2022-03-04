import { Card } from "react-bootstrap";
import Contador from './Contador';
import ImgProducts from './ImgProducts';

const ContadorCard = () =>{
    return(
        <Card style={{ width: '18rem' }}>
            <ImgProducts />
        {/* <Card.Img variant="top" src="<ImgProducts/>" /> */}
        <Card.Body>
            <Card.Title>Papas Fritas</Card.Title>
            <Card.Text>
                Cant: 125gr
            </Card.Text>
         <Contador />
        </Card.Body>
        </Card>
    )
}
export default ContadorCard;