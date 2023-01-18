import "./ProfileNavbar.css";
import { Link } from "react-router-dom";

function ProfileNavbar({storeOwner}) {
  console.log(storeOwner)
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

export default ProfileNavbar;
