import { useState } from "react";
import "./Signup.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

function Signup({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassConfirm] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
    console.log(username)
  }

  function handlePassword(e){
    setPassword(e.target.value)
    console.log(password)
  }

  function handlePasswordConfirm(e){
    setPassConfirm(e.target.value)
    console.log(passconfirm)
  }

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      username: username,
      password: password,
      password_confirmation: passconfirm,
    }
    fetch("/users" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))

  }

  return (
    <div id="signuptop">
      <Link to="/">
        <button className="exit"> Exit</button>
      </Link>
      <form id="login">
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
            <input value = {password} onChange={handlePassword} type="password"  />
          </Typed>
          <Typed
            strings={["Re-enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input value={passconfirm} onChange={handlePasswordConfirm} type="password"/>
          </Typed>
          <button onClick={handleSubmit} > Create Account</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
