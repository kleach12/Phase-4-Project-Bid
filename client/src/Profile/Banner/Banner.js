import './Banner.css'

function Banner({ user }) {
  console.log(user)
  return (
    <div>
      <img className= 'profile_banner' src= {user.profile_banner} width = '100%' height = '250em'/>
    </div>
  );
}

export default Banner;
