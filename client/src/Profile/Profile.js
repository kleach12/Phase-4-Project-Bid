import ProfileNavbar from "./ProfileNav/ProfileNavbar";
import Banner from "./Banner/Banner";

function Profile({ user, setUser, setSignedIn }) {
  // fix the issue with refreshing and losing data also add a function that will allow user to edit there banner image. also add profile picture feat
  // The issue was my code was throwing errors because it was trying to mount the component without data. A simple if else statement waiting for the data fixes this.

  if (user === null) {
    return "Loading...";
  }
  return (
    <div>
      <ProfileNavbar user = {user} setSignedIn = {setSignedIn} />
      <Banner user={user} setUser={setUser}  />
    </div>
  );
}

export default Profile;
