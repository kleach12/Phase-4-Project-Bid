import "./StoreCard.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Typed from "react-typed";

export default function StoreCard({ item,setOpen, setTriggerRender, triggerRender }) {
  const [userPrice, setUserPrice] = useState('');
  const [showPrice, setShowPrice] = useState(false);
  const [error, setError] = useState(null);

  const errorMessage = (
    <Typed
      strings={[error]}
      typeSpeed={40}
      backSpeed={40}
      className="error_msg"
    />
  );

  function handleBuyItem(item) {
    const formData = {
      item_id: item.id,
      user_price: userPrice,
    };
    fetch(`/useritems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(
        (data) =>{
        if (data.errors) {
          setError(data.errors[0]);
          setTimeout(() => {
            setError(null);
          }, 3000);
        } else {
          setUserPrice('')
          setTriggerRender(!triggerRender);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
          setShowPrice(false)
        }}
      );
  }

  return (
    <Card
      bg={"black"}
      key={item.id}
      style={{ width: "18rem" }}
      className="grid-item"
    >
      <Card.Img variant="top" src={item.picture} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{item.name}</Card.Title>
        <Card.Text className="card-price">${item.price}</Card.Text>
      </Card.Body>
      {showPrice ? (
        <input
          type="text"
          placeholder="Enter Price"
          value={userPrice}
          onChange={(e) => setUserPrice(e.target.value)}
        />
      ) : null}
      {showPrice ? (
        <Button onClick={() => handleBuyItem(item)} variant="custom">
          Buy
        </Button>
      ) : (
        <Button onClick={() => setShowPrice(true)} variant="custom" >
          Buy
        </Button>
      )}
      <h2>{error ? errorMessage : null}</h2>
      {showPrice ? (
        <Button onClick={() => setShowPrice(false)} variant="custom">
          X
        </Button>
      ) : null}
    </Card>
  );
}
