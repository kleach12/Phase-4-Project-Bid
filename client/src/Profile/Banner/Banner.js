import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Banner({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [newBanner, setNewBanner] = useState(null);

  function editBanner() {
    setEditMode(!editMode);
  }

  function handleNewBanner(e) {
    setNewBanner(e.target.value);
  }

  function handleBannerUpdate(e) {
    e.preventDefault();
    const formData = {
      profile_banner: newBanner,
    };

    fetch(`/users`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        setEditMode(false);
      });
  }

  if (editMode) {
    return (
      <div id="profile_banner">
        <div id="edit_banner">
          <FontAwesomeIcon icon={faPenToSquare} onClick={editBanner} />
        </div>
        <img id="banner_edit" src={user.profile_banner} />
        <form id="banner_form">
          <h3> New Profile Url</h3>
          <input id="edit_input" type="text" onChange={handleNewBanner} />
          <button type="submit" onClick={handleBannerUpdate}>
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div id="profile_banner">
      <div id="edit_banner">
        <FontAwesomeIcon icon={faPenToSquare} onClick={editBanner} />
      </div>
      <img id="banner_current" src={user.profile_banner} />
    </div>
  );
}

export default Banner;
