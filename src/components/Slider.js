import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return(
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Primer slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Segundo slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Tercero slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
      )
}

export default Slider;