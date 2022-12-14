import './Profile_Pic.css'

function Profile_Pic({user, setUser}){
  console.log(user)
  return(
    <div>
      <img  src={user.profile_pic} />
    </div>
  )
}

export default Profile_Pic