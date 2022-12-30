import "./Profile_Pic.css";

import { useState } from "react";

function Profile_Pic({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [newPic, setNewPic] = useState(null)

  function editPic() {
    setEditMode(!editMode);
    console.log(editMode);
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

if(editMode){
  return(
    <div id="profile_pic" >
      <img src={user.profile_pic} />
      <input id = 'newPicInput' type= 'textbox'></input>
      <button id = 'newPicSubmit' onClick={editPic}> New Pic </button>
    </div>
  )
}
  return (
    <div id ="profile_pic" onClick={editPic}>
      <img src={user.profile_pic} />
    </div>
  );
}

export default Profile_Pic;
