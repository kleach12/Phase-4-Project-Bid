import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navigate } from "react-router-dom";

function Carosel({
  allStores,
  setCurrentStore,
  setChosenStore,
  chosenStore,
  viewingStore,
  setStoreView,
}) {
  function handleChosenStore(currStore) {
    setChosenStore({ name: currStore.name });
    if (chosenStore.name !== "") {
      handleStore();
    }
    //  console.log(currStore.name)
  }

  function handleStore() {
    console.log(chosenStore);

    const formData = {
      name: chosenStore.name,
    };

    // if (chosenStore.name !== ""){
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
          setStoreView(true);
          console.log(data);
        });
      }
    });
    // }
  }
  if (viewingStore) {
    return <Navigate to={"/store"} />;
  }

  if (allStores != null) {
    return (
      <Carousel className="caro">
        {allStores.map((store) => (
          <Carousel.Item
            key={store.id}
            interval={5000}
            id="caro_item"
            onClick={() => handleChosenStore(store)}
          >
            <img id="slide" src={store.picture} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Carosel;
