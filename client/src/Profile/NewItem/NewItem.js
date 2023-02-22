import './NewItem.css'
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Typed from "react-typed";

function NewItem({ storeOwner, setTriggerRender, triggerRender, newItem }) {
  const [itemCreated, setItemCreatedItem] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemPicture, setItemPicture] = useState("");
  const [error, setError] = useState(null);
  const errorMessage = (
    <Typed
      strings={[error]}
      typeSpeed={40}
      backSpeed={40}
      className="error_msg"
    />
  );

  function handleItemName(e) {
    setItemName(e.target.value);
    setError(null)
  }

  function handleItemPrice(e) {
    setItemPrice(e.target.value);
    setError(null)
  }

  function handleItemPicture(e) {
    setItemPicture(e.target.value);
    setError(null)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: itemName,
      picture: itemPicture,
      price: itemPrice
    };
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => r.json())
      .then((data) => {
          if (data.errors) {
            console.log(data.errors)
            setError(data.errors[0]);
          } else {
            setTriggerRender(!triggerRender);
            newItem(data);
            setItemCreatedItem(true);
          }
        })
      }

  if (itemCreated) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div id="signuptop">
      <Link to="/profile">
        <button className="exit"> Exit</button>
      </Link>
      <form id="login">
        <div className="exit"></div>
        <div className="container">
          <Typed
            strings={["Lets add an item "]}
            typeSpeed={40}
            backSpeed={40}
            className="welcome"
          />
          <Typed
            strings={["Enter Item Name"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={itemName} onChange={handleItemName} type="text" />
          </Typed>
          <Typed
            strings={["Enter Price"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={itemPrice} onChange={handleItemPrice} type="text" />
          </Typed>
          <Typed
            strings={["Enter Img Url"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input
              value={itemPicture}
              onChange={handleItemPicture}
              type="text"
            />
          </Typed>
        </div>
        <button onClick={handleSubmit}> Create Item</button>
        <h2>{error ? errorMessage : null}</h2>
      </form>
    </div>
  );
}

export default NewItem;
