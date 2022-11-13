import "./LoggedInNav.css";
import { Link } from "react-router-dom";

function LoggedInNav({setSignedIn}) {

  function handleSignOut(){
    fetch("/logout",{
      method: "DELETE",
    }).then((res)=>{ 
      console.log(res)
      setSignedIn(false)
    })
  }
  return (
    <nav id="loggedInNav">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
          <button id="profile"> Profile </button>
          <button id="signout" onClick={handleSignOut
          }> Sign out </button>
      </div>
    </nav>
  );
}

export default LoggedInNav;