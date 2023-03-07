import "./Store.css";
import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Popup from "reactjs-popup";
import Typed from "react-typed";

function Store({
  currentStore,
  setCurrentStore,
  setChosenStore,
  setStoreView,
  viewingStore,
  user,
  storeOwner,
  setTriggerRender,
  triggerRender,
}) {
  const store = JSON.parse(localStorage.getItem("store"));
  const [filteredItems, setFilterdItems] = useState(null);
  const [open, setOpen] = useState(false);

  const popUp = (
    <Popup
      className={"store_popup"}
      open={open}
      onClose={() => setOpen(false)}
      modal
    >
      <Typed
        strings={["Thank you for your purchase"]}
        typeSpeed={40}
        backSpeed={40}
      />
    </Popup>
  );
  if (filteredItems === null) {
    setFilterdItems(
      store.items.filter(
        (obj, index) =>
          store.items.findIndex((item) => item.name === obj.name) === index
      )
    );
  }

  function handleBuyItem(item) {
    console.log(item);
    const formData = {
      item_id: item.id,
      // name: item.name,
      // picture: item.picture,
      // price: item.price,
      // store_id: item.store_id,
      // user_id: user.id,
    };
    fetch(`/useritems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setTriggerRender(!triggerRender);
          setOpen(true);
          setTimeout(() =>  {setOpen(false)}, 2000)
          console.log(data);
        });
      }
    });
  }

  if (filteredItems) {
    if (viewingStore && filteredItems) {
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
                {filteredItems.map((item) => {
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
                      </Card.Body>
                      <Button
                        onClick={() => handleBuyItem(item)}
                        variant="custom"
                      >
                        Buy
                      </Button>
                    </Card>
                  );
                })}
              </div>
            </div>
            {popUp}
          </div>
        );
      }
    } else if (viewingStore === false) {
      return <Navigate to={"/"} />;
    }
    return (
      <div id="logged_out_store">
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
            {filteredItems.map((item) => {
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
}

export default Store;
