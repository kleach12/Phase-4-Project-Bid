import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import Typed from "react-typed";

function NewItem({ storeOwner, setTriggerRender, triggerRender, newItem }) {
  const [itemCreated, setItemCreatedItem] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemPicture, setItemPicture] = useState("");

  function handleItemName(e) {
    setItemName(e.target.value);
  }

  function handleItemPrice(e) {
    setItemPrice(e.target.value);
  }

  function handleItemPicture(e) {
    setItemPicture(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: itemName,
      picture: itemPicture,
      price: itemPrice,
      store_id: storeOwner.id,
      user_id: null,
    };
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setTriggerRender(!triggerRender)
          newItem(data)
        })
      }
    });
    setItemCreatedItem(true)
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

          <button onClick={handleSubmit}> Create Item</button>
        </div>
      </form>
    </div>
  );
}

export default NewItem;
