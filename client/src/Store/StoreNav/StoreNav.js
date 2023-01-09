import { Link } from "react-router-dom";
import "./StoreNav.css";

function StoreNav() {
  return (
    <nav id="store_nav">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button id="home"> Home </button>
        </Link>
      </div>
    </nav>
  );
}

export default StoreNav;
