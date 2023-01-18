import "./StoreBanner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function StoreBanner({ storeOwner, setStoreOwner }) {
  const [editMode, setEditMode] = useState(false);
  const [newPicture, setNewPicture] = useState(null);
  const store = JSON.parse(localStorage.getItem("store"));
  function editPicture() {
    setEditMode(!editMode);
  }

  function handleNewPicture(e) {
    setNewPicture(e.target.value);
  }

  function handlePictureUpdate(e) {
    e.preventDefault();
    const formData = {
      picture: newPicture,
    };

    fetch(`/stores/${storeOwner.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStoreOwner(data);
        setEditMode(false);
      });
  }
  if (editMode) {
    return (
      <div id="profile_banner">
        <div id="edit_banner">
          <FontAwesomeIcon icon={faPenToSquare} onClick={editPicture} />
        </div>
        <img id="banner_edit" src={storeOwner.picture} />
        <form id="banner_form">
          <h3> New Store Picture</h3>
          <input id="edit_input" type="text" onChange={handleNewPicture} />
          <button type="submit" onClick={handlePictureUpdate}>
            {" "}
            Submit
          </button>
        </form>
      </div>
    );
  }
  if (storeOwner) {
    return (
      <div id="store_banner">
        <div id="edit_banner">
        <FontAwesomeIcon icon={faPenToSquare} onClick={editPicture} />
      </div>
        <img id="banner_current" src={storeOwner.picture} />
      </div>
    );
  }
  return (
    <div id="store_banner">
      <img id="banner_current" src={store.picture} />
    </div>
  );
}

export default StoreBanner;
