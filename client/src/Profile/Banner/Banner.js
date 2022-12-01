import './Banner.css'

function Banner({ user }) {
  // I need to fix edge case when user refreshes page we lose all user information. I need the page to be able to refresh and keep all the data
  return (
    <div id = "profile_banner">
      <img src= {user.profile_banner} />
    </div>
  );
}

export default Banner;
