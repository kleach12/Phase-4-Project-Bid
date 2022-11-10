import "./Signin.css";
import Typed from "react-typed";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function Signin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleUsername(e) {
    setUsername(e.target.value);
    console.log(username)
  }

  function handlePassword(e){
    setPassword(e.target.value)
    console.log(password)
  }

  function handleSubmit(e){
    e.preventDefault()
    const formData = {
      username: username,
      password: password
    }
    fetch("/login" ,{
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
    <div id="signintop">
      <Link to = '/'>
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
            strings={["Enter username"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="text" onChange={handleUsername}/>
          </Typed>
          <Typed
            strings={["Enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="password" onChange={handlePassword}/>
          </Typed>
          <button onClick={handleSubmit} > Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
