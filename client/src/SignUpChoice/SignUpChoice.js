import "./SignUpChoice.css";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function SignUpChoice() {
  return (
    <div id="choosetop">
      <Link to="/">
        <button className="exit"> Exit</button>
      </Link>
      <div id="choose_container">
      <div id="choose">
        <div className="exit"></div>
        <div className="container">
          <Typed
            strings={[
              "Welcome to Bid!",
              "Are you a Buyer or Supplier?",
            ]}
            typeSpeed={40}
            backSpeed={40}
            className="welcome"
          />
        </div>
        <div>
        <Link to="/signup">
            <button className="choose_button"> User Sign Up</button>
          </Link>
          <Link to="/storesignup">
            <button className="choose_button"> Store Sign Up</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SignUpChoice;