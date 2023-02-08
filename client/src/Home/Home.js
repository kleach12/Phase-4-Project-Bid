import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home({
  signedIn,
  setSignedIn,
  allStores,
  setCurrentStore,
  setChosenStore,
  chosenStore,
  viewingStore,
  setStoreView,
  user,
  setUser,
  storeOwner,
  setStoreOwner,
  items,
}) {
  if (items) {
    if (signedIn) {
      return (
        <div>
          <LoggedInNav
            setSignedIn={setSignedIn}
            user={user}
            storeOwner={storeOwner}
            signedIn={signedIn}
            setStoreOwner={setStoreOwner}
            setUser={setUser}
          />
          <Carosel
            allStores={allStores}
            setCurrentStore={setCurrentStore}
            setChosenStore={setChosenStore}
            chosenStore={chosenStore}
            viewingStore={viewingStore}
            setStoreView={setStoreView}
          />
          <div className="center">
            <div className="grid-home">
              {items.map((item) => {
                return (
                  <Card
                    bg={"black"}
                    key={item.id}
                    style={{ width: "18rem" }}
                    className="home-item"
                  >
                    <Card.Img
                      variant="top"
                      src={item.picture}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.store.name}
                      </Card.Title>
                      <Card.Text className="card-item">{item.name}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (signedIn === false) {
      return (
        <div>
          <Navbar />
          <Carosel
            allStores={allStores}
            setCurrentStore={setCurrentStore}
            setChosenStore={setChosenStore}
            chosenStore={chosenStore}
            viewingStore={viewingStore}
            setStoreView={setStoreView}
          />
          <div className="center">
            <div className="grid-home">
              {items.map((item) => {
                return (
                  <Card
                    bg={"black"}
                    key={item.id}
                    style={{ width: "18rem" }}
                    className="home-item"
                  >
                    <Card.Img
                      variant="top"
                      src={item.picture}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {item.store.name}
                      </Card.Title>

                      <Card.Text className="card-item">{item.name}</Card.Text>
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
}

export default Home;
