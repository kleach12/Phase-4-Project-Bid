import "./LoggedInNav.css";
import { Link } from "react-router-dom";

function LoggedInNav({
  setSignedIn,
  storeOwner,
  user,
  setUser,
  setStoreOwner,
}) {
  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
      setUser(null)
    });
  }

  function handleStoreSignOut() {
    fetch("/endstore", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
      setStoreOwner(null)
    });
  }
  if (user !== null) {
    return (
      <nav id="loggedInNav">
        <div className="navleft">
          <h1>Bid</h1>
        </div>
        <div className="navcenter"></div>
        <div className="navright">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <button id="profile"> Profile </button>
          </Link>
          <button id="signout" onClick={handleSignOut}>
            {" "}
            Sign out{" "}
          </button>
        </div>
      </nav>
    );
  } else if (storeOwner !== null) {
    return (
      <nav id="loggedInNav">
        <div className="navleft">
          <h1>Bid</h1>
        </div>
        <div className="navcenter"></div>
        <div className="navright">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <button id="profile"> Profile </button>
          </Link>
          <button id="storeSignout" onClick={handleStoreSignOut}>
            {" "}
            Sign out{" "}
          </button>
        </div>
      </nav>
    );
  }
}

export default LoggedInNav;
