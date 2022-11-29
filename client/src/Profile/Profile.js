import ProfileNavbar from "./ProfileNav/ProfileNavbar"
import Banner from "./Banner/Banner"

function Profile({user}){
  return(
    <div>
      <ProfileNavbar/>
      <Banner user={user}/>
    </div>
  )
}

export default Profile