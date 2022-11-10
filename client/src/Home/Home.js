import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import { __esModule } from "react-router-dom/cjs/react-router-dom.min";

function Home(user) {
  const loggedInUser = (
    <div>
      <h2>{user.username}</h2>
      <Navbar />
      <Carosel />
    </div>
  );

  const emptyUser = (
    <div>
      <Navbar />
      <Carosel />
    </div>
  );

  return user ? emptyUser : loggedInUser;
}

export default Home;
