import "./Profile.css";
import ProfileNavbar from "./ProfileNav/ProfileNavbar";
import Banner from "./Banner/Banner";
import Profile_Pic from "./ProfilePic/ProfilePic";
import StoreBanner from "../Store/StoreBanner/StoreBanner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Profile({
  user,
  setUser,
  setSignedIn,
  storeOwner,
  setStoreOwner,
  triggerRender,
  setTriggerRender,
}) {
  // fix the issue with refreshing and losing data also add a function that will allow user to edit there banner image. also add profile picture feat
  // The issue was my code was throwing errors because it was trying to mount the component without data. A simple if else statement waiting for the data fixes this.
  // console.log(storeOwner );
  // const [newItemm, setNewItem] = useState(null)
  const [filteredItems, setFilterdItems] = useState(null);

  if (filteredItems === null && storeOwner) {
    setFilterdItems(
      storeOwner.items.filter(
        (obj, index) =>
          storeOwner.items.findIndex((item) => item.name === obj.name) === index
      )
    );
  }

  if (storeOwner || user) {
    if (user === null && storeOwner === null) {
      return "Loading...";
    } else if (user !== null) {
      return (
        <div>
          <ProfileNavbar user={user} setSignedIn={setSignedIn} />
          <div className="outer">
            <Banner user={user} setUser={setUser} />
            <Profile_Pic user={user} setUser={setUser} />
          </div>
          <div className="center">
            <div className="grid">
              {user.items.map((item) => {
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
    } else if (storeOwner !== null && filteredItems) {
      return (
        <div>
          <ProfileNavbar storeOwner={storeOwner} setSignedIn={setSignedIn} />
          <StoreBanner
            storeOwner={storeOwner}
            setStoreOwner={setStoreOwner}
            triggerRender={triggerRender}
            setTriggerRender={setTriggerRender}
          />
          <h2 id="pro_store_name"> {storeOwner.name}</h2>
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

export default Profile;
