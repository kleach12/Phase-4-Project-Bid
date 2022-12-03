import ProfileNavbar from "./ProfileNav/ProfileNavbar"
import Banner from "./Banner/Banner"
import { useEffect, useState } from "react";

function Profile({user}){
  // fix the issue with refreshing and losing data also add a function that will allow user to edit there banner image. also add profile picture feat
  // The issue was my code was throwing errors because it was trying to mount the component without data. A simple if else statement waiting for the data fixes this.
  
  const [loggedInUser, setLoggedInUser] = useState(null)

if (user === null){
  return 'Loading...'
}
  return(
    <div>
      <ProfileNavbar/>
      <Banner user = {user}/>
    </div>
  )
}

export default Profile