import "./ProfilePic.css";

import { useState } from "react";

function Profile_Pic({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [newPic, setNewPic] = useState(null);
  const userPic = user.pic
    ? user.profile_pic
    : "https://thumbs.dreamstime.com/b/profile-placeholder-image-gray-silhouette-no-photo-person-avatar-default-pic-used-web-design-127393540.jpg";

  function editPic() {
    setEditMode(!editMode);
    console.log(editMode);
  }

  function handleNewProPic(e) {
    setNewPic(e.target.value);
  }

  function handleProfilePicUpdate(e) {
    e.preventDefault();
    const formData = {
      profile_pic: newPic,
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
        setEditMode(false);
      });
  }
  if (user) {
    if (editMode) {
      return (
        <div>
          <div id="profile_pic" onClick={editPic}>
            <img id="user_pic" src={userPic} />
          </div>
          <form id="profile_edit_input">
            <h2> New Profile Picture</h2>
            <input
              id="newPicInput"
              type="textbox"
              onChange={handleNewProPic}
            ></input>
            <button id="newPicSubmit" onClick={handleProfilePicUpdate}>
              {" "}
              New Pic{" "}
            </button>
          </form>
        </div>
      );
    }
    return (
      <div id="profile_pic" onClick={editPic}>
        <img src={userPic} alt="Profile_Pic" />
      </div>
    );
  }
}

export default Profile_Pic;
