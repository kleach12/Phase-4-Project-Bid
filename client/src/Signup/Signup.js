
import "./Signup.css";
import Typed from "react-typed";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signup() {
  return (
    <div id="signuptop">
      <Link to = '/'>
        <button className="exit"> Exit</button>
      </Link>
      <div id="login">
        <div className="exit"></div>
        <div className="container">
          <Typed
            strings={[
              "Have we met?",
              "You're New?",
              "Ok, lets sign ",
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

export default Signup;