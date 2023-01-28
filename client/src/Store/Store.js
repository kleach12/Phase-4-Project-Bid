import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Store({
  currentStore,
  setCurrentStore,
  setChosenStore,
  setStoreView,
  viewingStore,
  storeOwner,
}) {
  const store = JSON.parse(localStorage.getItem("store"));
  console.log(store);
  if (viewingStore) {
    // return <Navigate to={"/"} />;
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
                    {/* <Card.Text className = 'card-price'>${item.price}</Card.Text>
                  <Button variant="custom">Buy</Button> */}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (viewingStore === false) {
    return <Navigate to={"/"} />;
  }
  return <h2>Loading...</h2>;
}

export default Store;
