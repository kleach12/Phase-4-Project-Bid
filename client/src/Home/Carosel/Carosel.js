import "./Carosel.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navigate } from "react-router-dom";
// import { useState } from "react";

function Carosel({
  allStores,
  setCurrentStore,
  // setChosenStore,
  // chosenStore,
  viewingStore,
  setStoreView,
}) {

  function handleStore(currStore) {
    console.log(currStore)
    console.log(currStore.id)

    fetch(`/showingstore/${currStore.id}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setStoreView(true);
          console.log(data)
          localStorage.setItem("store", JSON.stringify(data));
          // setCurrentStore(data);
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
        {
        allStores.map(store => {
          return (
            <Carousel.Item
              key={store.id}
              // interval={5000}
              className="caro_item"
              onClick={() => handleStore(store)}
            >
              <img id="slide" src={store.picture} alt={store.name}  />
            </Carousel.Item>
          );
        })
        }
      </Carousel>
    );
  }
}

export default Carosel;
