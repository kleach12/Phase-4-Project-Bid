import "./Profile.css";
import ProfileNavbar from "./ProfileNav/ProfileNavbar";
import Banner from "./Banner/Banner";
import Profile_Pic from "./ProfilePic/ProfilePic";
import StoreBanner from "../Store/StoreBanner/StoreBanner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function Profile({
  user,
  setUser,
  setSignedIn,
  storeOwner,
  setStoreOwner,
  triggerRender,
  setTriggerRender,
  filteredItems,
}) {
const [userItems, setUserItems] = useState(null)

  useEffect(() => {
    fetch("/user_puchased")
    .then((response) => response.json())
    .then((data) => {
          if (data.error) {
            console.log(data);
          } else {
            setUserItems(data);
          }
        });
    }, []);

if(userItems){
  console.log(userItems[0].item.name)
}
    
if( userItems){
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
              {userItems.map((userItem,index) => {
                return (
                  <Card
                    bg={"black"}
                    key={index}
                    style={{ width: "18rem" }}
                    className="grid-item"
                  >
                    <Card.Img
                      variant="top"
                      src={userItem.item.picture}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title className="card-title">
                        {userItem.item.name}
                      </Card.Title>
                      <Card.Title className="card-title" id = 'user_price'>
                         ${userItem.user_price}
                      </Card.Title>
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
}
export default Profile;
