import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navigate } from "react-router-dom";

function Carosel({ allStores, viewingStore, setStoreView }) {
  function handleStore(currStore) {

    fetch(`/showingstore/${currStore.name}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setStoreView(true);
          console.log(data)
          localStorage.setItem("store", JSON.stringify(data));
        });
      }
    });
  }
  if (viewingStore) {
    return <Navigate to={"/store"} />;
  } else if (allStores != null) {
    return (
      <Carousel className="caro">
        {allStores.map((store) => {
          return (
            <Carousel.Item
              key={store.name}
              interval={5000}
              className="caro_item"
              onClick={() => handleStore(store)}
            >
              <img
                id="slide"
                src={store.picture}
                alt={store.name}
                className="d-block w-25 mx-auto"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Carosel;
