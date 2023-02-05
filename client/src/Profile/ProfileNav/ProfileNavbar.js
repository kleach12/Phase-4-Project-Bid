import "./ProfileNavbar.css";
import { Link } from "react-router-dom";

function ProfileNavbar({ storeOwner }) {
  console.log(storeOwner == null);
  if (storeOwner == null) {
    return (
      <nav id="loggedInNav">
        <div className="navleft">
          <h1>Bid</h1>
        </div>
        <div className="navcenter"></div>
        <div className="navright">
          <Link to="/" style={{ textDecoration: "none" }}>
            <button id="home"> Home </button>
          </Link>
          <Link to="/delete" style={{ textDecoration: "none" }}>
            <button id="signout"> Delete </button>
          </Link>
        </div>
      </nav>
    );
  }
  return (
    <nav id="loggedInNav">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button id="home"> Home </button>
        </Link>
        <Link to="/newitem" style={{ textDecoration: "none" }}>
          <button id="new_item"> Add Item </button>
        </Link>
      </div>
    </nav>
  );
}

export default ProfileNavbar;
