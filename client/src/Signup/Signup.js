import { useState } from "react";
import "./Signup.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Signup({ setSignedIn, signedIn, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassConfirm] = useState("");
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
    setUsername(e.target.value.toUpperCase());
    setError(null)
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setError(null)
  }

  function handlePasswordConfirm(e) {
    setPassConfirm(e.target.value);
    setError(null)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
      password_confirmation: passconfirm,
    };
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => r.json())
      .then((data) => {
        if (data.errors){
          console.log(data.errors)
          setError(data.errors[0])
        }else{
          console.log(data)
          setSignedIn(true);
          setUser(data);
        }
        });
      }

  if (signedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <div id="signuptop">
      <Link to="/">
        <button className="exit"> Exit</button>
      </Link>
      <form id="signupform">
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
            <input value={username} onChange={handleUsername} type="text" />
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
          {/* <button onClick={handleSubmit}> Create Account</button> */}
        </div>
        <button onClick={handleSubmit}> Create Account</button>
        <h2>{error ? errorMessage : null}</h2>
      </form>
    </div>
  );
}

export default Signup;
