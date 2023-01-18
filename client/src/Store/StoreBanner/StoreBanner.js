import "./StoreBanner.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
// import { useState } from "react";

function StoreBanner({storeOwner}) {
  const store = JSON.parse(localStorage.getItem("store"));
  console.log(storeOwner)
  if (storeOwner){
    return (
      <div id="store_banner">
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
