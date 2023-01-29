import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
function Store({
  currentStore,
  setCurrentStore,
  setChosenStore,
  setStoreView,
  viewingStore,
  user,
  storeOwner,
}) {
  const [item, setItem] = useState(null);
  const store = JSON.parse(localStorage.getItem("store"));

  // function boughtItem
  function handleBuyItem(e) {
    console.log(e)
    // e.preventDefault();
    // const formData = {
    //   store_id: 0,
    //   user_id: user.id,
    // };
    // fetch("/items", {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((response) => {
    //   if (response.ok) {
    //     response.json().then((data) => {
    //       console.log(data);
    //     });
    //   }
    // });
  }
  if (viewingStore) {
    if (user) {
      return (
        <div>
          <StoreNav
            setCurrentStore={setCurrentStore}
            setChosenStore={setChosenStore}
            currentStore={currentStore}
            setStoreView={setStoreView}
            viewingStore={viewingStore}
          />
          <StoreBanner />
          <h2 id="pro_store_name"> {store.name}</h2>
          <div className="center">
            <div className="grid">
              {store.items.map((item) => {
                return (
                  <Card
                    bg={"black"}
                    key={item.id}
                    style={{ width: "18rem" }}
                    className="grid-item"
                  >
                    <Card.Img
                      variant="top"
                      src={item.picture}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.name}
                      </Card.Title>
                      <Card.Text className="card-price">
                        ${item.price}
                      </Card.Text>
                      <Button onClick={handleBuyItem} variant="custom">
                        Buy
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  } else if (viewingStore === false) {
    return <Navigate to={"/"} />;
  }
  // return <h2>Loading...</h2>;
  return (
    <div>
      <StoreNav
        setCurrentStore={setCurrentStore}
        setChosenStore={setChosenStore}
        currentStore={currentStore}
        setStoreView={setStoreView}
        viewingStore={viewingStore}
      />
      <StoreBanner />
      <h2 id="pro_store_name"> {store.name}</h2>
      <div className="center">
        <div className="grid">
          {store.items.map((item) => {
            return (
              <Card
                bg={"black"}
                key={item.id}
                style={{ width: "18rem" }}
                className="grid-item"
              >
                <Card.Img
                  variant="top"
                  src={item.picture}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title className="card-title">{item.name}</Card.Title>
                  <Card.Text className="card-price">${item.price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;
