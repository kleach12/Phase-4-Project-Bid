import "./Profile_Pic.css";

import { useState } from "react";

function Profile_Pic({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [newPic, setNewPic] = useState(null);

  function editPic() {
    setEditMode(!editMode);
    console.log(editMode);
  }

  function handleNewProPic(e){
    setNewPic(e.target.value)
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

  if (editMode) {
    return (
      <div>
        <div id="profile_pic" onClick={editPic}>
          <img id="user_pic" src={user.profile_pic} />
        </div>
        <form id="profile_edit_input">
          <h2> New Profile Picture</h2>
          <input id="newPicInput" type="textbox" onChange={handleNewProPic}></input>
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
      <img src={user.profile_pic} />
    </div>
  );
}

export default Profile_Pic;
