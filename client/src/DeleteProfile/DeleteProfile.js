import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./DeleteProfile.css";
import Typed from "react-typed";

function DeleteProfile({ user, setSignedIn, signedIn }) {
  function handleDeleteUser() {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setSignedIn(false);
    });
  }
  if (signedIn) {
    // return <Navigate to={"/"} />;
    return (
      <div id="delete_pro_top">
        <Link to="/profile">
          <button className="exit"> Exit</button>
        </Link>
        <form id="delete_profile">
          <Typed
            strings={["Sorry to see you go "]}
            typeSpeed={40}
            backSpeed={40}
            className="welcome"
          />
          <button onClick={handleDeleteUser}> Delete</button>
        </form>
      </div>
    );
  }
  return <Navigate to={"/"} />;
}

export default DeleteProfile;
