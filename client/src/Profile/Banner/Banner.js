import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Banner({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [newBanner, setNewBanner] = useState(null);

  function editBanner() {
    setEditMode(!editMode);
    console.log(editMode);
  }

  function handleNewBanner(e) {
    setNewBanner(e.target.value);
    console.log(newBanner);
  }

  function handleBannerUpdate(e) {
    e.preventDefault();
    const formData = {
      profile_banner: newBanner,
    };

    fetch(`/users/${user.id}`, {
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
      });
  }

  if (editMode) {
    return (
      <div id="profile_banner">
        <div id="edit_banner">
          <FontAwesomeIcon icon={faPenToSquare} onClick={editBanner} />
        </div>
        <img src={user.profile_banner} />
        <h3> New Profile Url</h3>
        <form>
          <input type="text" onChange={handleNewBanner} />
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
      <img src={user.profile_banner} />
    </div>
  );
}

export default Banner;
