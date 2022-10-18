import "./Signin.css";
import Typed from "react-typed";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signin() {
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
          <button> Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
