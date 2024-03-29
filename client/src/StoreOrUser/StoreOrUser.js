import "./StoreOrUser.css";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function StoreOrUser() {
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
              strings={["Welcome back!", "Which are you again?","Buyer or Supplier?"]}
              typeSpeed={40}
              backSpeed={40}
              className="welcome"
            />
          </div>
          <div>
            <Link to="/signin">
              <button className="choose_button"> User Sign In</button>
            </Link>
            <Link to="/storesignin">
              <button className="choose_button"> Store Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreOrUser;
