import './Carosel.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Carosel(){
  return(
    <Carousel className='caro' >
      <Carousel.Item interval={5000} >
        {/* <img
          className="slide"
          src={require("./space.jfif")}
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <h2> Hi </h2>
        {/* <img
          className="slide"
          src={require("./space.jfif")}
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className="slide">
      {/* <img
          className="slide"
          src={require("./space.jfif")}
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carosel