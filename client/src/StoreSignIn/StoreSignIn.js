import "./StoreSignIn.css"
import Typed from "react-typed";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

function StoreSignIn({ setStoreOwner, signedIn, setSignedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name.toUpperCase(),
      password: password,
    };
    fetch("/currstore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          if(data.id){
            console.log(data)
            setSignedIn(true);
            setStoreOwner(data);
          }
        });
      }
    });
  }
  if (signedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <div id="signintop">
      <Link to="/">
        <button className="exit"> Exit</button>
      </Link>
      <div id="login">
        <div className="exit"></div>
        <div className="container">
          <Typed
            strings={[
              "Welcome back!",
              "Lets start bidding!",
              "Who are you again?",
            ]}
            typeSpeed={40}
            backSpeed={40}
            className="welcome"
          />

          <Typed
            strings={["Enter Store Name"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="text" onChange={handleName} />
          </Typed>
          <Typed
            strings={["Enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="password" onChange={handlePassword} />
          </Typed>
          <button onClick={handleSubmit}> Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default StoreSignIn;
