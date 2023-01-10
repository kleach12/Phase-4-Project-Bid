import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Carosel({ allStores, handleStore }) {

  if (allStores != null) {
    return (
      <Carousel className="caro" >
        {allStores.map((store) => (
          <Carousel.Item  key = {store.id} interval={5000} id = "caro_item" onClick={() => handleStore(store)}>
            <Link to="/store" style={{ textDecoration: "none" }} >
            <img
              id="slide"
              src={store.picture}
              alt="First slide"
            />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Carosel;
