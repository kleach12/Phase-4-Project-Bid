import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navigate } from "react-router-dom";

function Carosel({
  allStores,
  setCurrentStore,
  // setChosenStore,
  // chosenStore,
  viewingStore,
  setStoreView,
}) {
  function handleStore(currStore) {
    // setChosenStore({ name: currStore.name });
    // if (chosenStore.name !== "") {
      const formData = {
        name: currStore.name,
      };
      // change this to show instead of a post
      fetch("/currstore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setStoreView(true);
            localStorage.setItem("store", JSON.stringify(data));
            setCurrentStore(data);
          });
        }
      });
    // }
  }
  if (viewingStore) {
    return <Navigate to={"/store"} />;
  } else if (allStores != null) {
    return (
      <Carousel className="caro">
        {allStores.map((store) => (
          <Carousel.Item
            key={store.id}
            interval={5000}
            id="caro_item"
            onClick={() => handleStore(store)}
          >
            <img id="slide" src={store.picture} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Carosel;
