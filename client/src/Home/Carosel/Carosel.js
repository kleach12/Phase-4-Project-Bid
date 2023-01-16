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
  const listOfStores = [
    { id: 1, name: "KALE", picture: "aklfjdlkasjfldksajf;klsd" },
    { id: 2, name: "Clarissa", picture: "aklfjdlkasjfldksajf;klsd" },
    { id: 3, name: "Taryn", picture: "aklfjdlkasjfldksajf;klsd" },
  ];
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
