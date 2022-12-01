import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

function Banner({ user }) {
  // I need to fix edge case when user refreshes page we lose all user information. I need the page to be able to refresh and keep all the data
  return (
    <div id="profile_banner">
      <div id = "edit_banner">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
      <img src={user.profile_banner} />
    </div>
  );
}

export default Banner;
