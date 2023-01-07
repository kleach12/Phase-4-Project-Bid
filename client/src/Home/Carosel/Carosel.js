import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Carosel({ allStores }) {
  // function handleStoreRoutes(){
  //   <Link to='/signin' style={{ textDecoration: 'none' }}>
  //         <button id="signin"> Sign in </button>
  //       </Link>
  // }

  if (allStores != null) {
    return (
      <Carousel className="caro">
        {allStores.map((store) => (
          <Carousel.Item interval={5000} >
            <Link to="/signin" style={{ textDecoration: "none" }}>
            <img
              className="slide"
              src={require("./space.jfif")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{store.name}</h3>
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Carosel;
