import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Carosel({ allStores }) {

  if (allStores != null) {
    console.log(allStores)
    return (
      <Carousel className="caro">
        {allStores.map((store) => (
          <Carousel.Item  key = {store.id} interval={5000} id = "caro_item">
            <Link to="/store" style={{ textDecoration: "none" }}>
            <img
              id="slide"
              src={store.picture}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h2 id = 'store_name'>{store.name}</h2> */}
            </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Carosel;
