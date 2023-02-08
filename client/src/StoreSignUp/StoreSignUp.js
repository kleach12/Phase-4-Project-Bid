import { useState } from "react";
import "./StoreSignUp.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function StoreSignUp({ setStoreOwner, signedIn, newStore, setSignedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassConfirm] = useState("");
  const [picture, setPicture] = useState("");
  const [error, setError] = useState(null);

  const errorMessage = (
    <Typed
      strings={[error]}
      typeSpeed={40}
      backSpeed={40}
      className="error_msg"
    />
  );

  function handleUsername(e) {
    setName(e.target.value.toUpperCase());
    setError(null);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setError(null);
  }

  function handlePasswordConfirm(e) {
    setPassConfirm(e.target.value);
    setError(null);
  }

  function handlePicture(e) {
    setPicture(e.target.value);
    setError(null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: name.toUpperCase(),
      picture: picture,
      password: password,
      password_confirmation: passconfirm,
    };
    fetch("/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
          setError(data.errors[0]);
        } else {
          setSignedIn(true);
          setStoreOwner(data);
        }
      }).catch(e => {console.log(e)})
  }
  if (signedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div id="signuptop">
      <Link to="/">
        <button className="exit"> Exit</button>
      </Link>
      <form id="store_signup">
        <div className="exit"></div>
        <div className="container">
          <Typed
            strings={["Have we met?", "You're New?", "Ok, lets sign up "]}
            typeSpeed={40}
            backSpeed={40}
            className="welcome"
          />

          <Typed
            strings={["Enter username"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={name} onChange={handleUsername} type="text" />
          </Typed>
          <Typed
            strings={["Enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={password} onChange={handlePassword} type="password" />
          </Typed>
          <Typed
            strings={["Re-enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input
              value={passconfirm}
              onChange={handlePasswordConfirm}
              type="password"
            />
          </Typed>
          <Typed
            strings={["Store Picture"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={picture} onChange={handlePicture} type="text" />
          </Typed>
        </div>
        <button onClick={handleSubmit}> Create Account</button>
        <h2>{error ? errorMessage : null}</h2>
      </form>
    </div>
  );
}

export default StoreSignUp;
