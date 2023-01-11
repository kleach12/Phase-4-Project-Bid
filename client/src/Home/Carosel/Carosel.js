import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Carosel({ allStores,setCurrentStore }) {

  function handleStore(currStore) {
    console.log(currStore.name)
    const formData = {
      name: currStore.name,
    };
    fetch("/currstore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setCurrentStore(data);
          <Navigate to="/store" replace={true} />;
        });
      }
    });
  }

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
