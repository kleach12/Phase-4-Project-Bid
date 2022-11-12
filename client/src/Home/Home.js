import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import { __esModule } from "react-router-dom/cjs/react-router-dom.min";


function Home({user, signedIn}) {
  const loggedInUser = (
    <div>
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

  return  signedIn ? loggedInUser : emptyUser;
}

export default Home;
