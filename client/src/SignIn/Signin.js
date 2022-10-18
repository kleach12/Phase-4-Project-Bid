import "./Signin.css";
import Typed from "react-typed";

function Signin() {
  return (
    <div id ="signintop">
      <button className="exit"> Exit</button>
      <div id="login">
        <div className="exit">
        </div>
        <div className="container">
          <Typed
            strings={[
              "Welcome back!",
              "Are you ready to start bidding?",
              "Who are you again?",
            ]}
            typeSpeed={40}
            className="welcome"
          />

          <Typed
            strings={["Enter username"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="text" />
          </Typed>
          <Typed
            strings={["Enter Password"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
          >
            <input type="text" />
          </Typed>
        </div>
        <button> Sign in</button>
      </div>
    </div>
  );
}

export default Signin;
