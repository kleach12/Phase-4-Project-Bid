import ProfileNavbar from "./ProfileNav/ProfileNavbar"
import Banner from "./Banner/Banner"
import { useEffect, useState } from "react";

function Profile({user}){

  return(
    <div>
      <ProfileNavbar/>
      <Banner user = {user}/>
    </div>
  )
}

export default Profile