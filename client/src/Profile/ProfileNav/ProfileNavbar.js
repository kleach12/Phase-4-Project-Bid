import "./ProfileNavbar.css";
import { Link } from "react-router-dom";

function ProfileNavbar({ setSignedIn }) {
  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
    });
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
        <button id="signout" onClick={handleSignOut}>
          {" "}
          Sign out{" "}
        </button>
      </div>
    </nav>
  );
}

export default ProfileNavbar;