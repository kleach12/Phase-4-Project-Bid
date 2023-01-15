import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
        <Link to='/storeoruser' style={{ textDecoration: 'none' }}>
          <button id="signin"> Sign in </button>
        </Link>
        <Link to='/signupchoice' style={{ textDecoration: 'none' }}>
          <button id="signup"> Sign up </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
