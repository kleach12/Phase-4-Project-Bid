import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";


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
