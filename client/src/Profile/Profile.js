import ProfileNavbar from "./ProfileNav/ProfileNavbar";
import Banner from "./Banner/Banner";
import Profile_Pic from "./Profile_Pic/Profile_Pic";
import StoreBanner from "../Store/StoreBanner/StoreBanner";

function Profile({ user, setUser, setSignedIn, storeOwner }) {
  // fix the issue with refreshing and losing data also add a function that will allow user to edit there banner image. also add profile picture feat
  // The issue was my code was throwing errors because it was trying to mount the component without data. A simple if else statement waiting for the data fixes this.
console.log(storeOwner)
  if (user === null && storeOwner === null) {
    return "Loading...";
  } else if (user !== null){
    return (
      <div>
        <ProfileNavbar user = {user} setSignedIn = {setSignedIn} />
        <Banner user={user} setUser={setUser}  />
        <Profile_Pic user={user} setUser={setUser}/>
      </div>
    )
  } else if (storeOwner !== null){
    return (
      <div>
        <ProfileNavbar storeOwner = {storeOwner} setSignedIn = {setSignedIn} />
        <StoreBanner storeOwner = {storeOwner}/>
      </div>)
  }
  // return (
  //   <div>
  //     <ProfileNavbar user = {user} setSignedIn = {setSignedIn} />
  //     <Banner user={user} setUser={setUser}  />
  //     <Profile_Pic user={user} setUser={setUser}/>
  //   </div>
  // );
}

export default Profile;
