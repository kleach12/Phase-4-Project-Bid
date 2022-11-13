import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from  "./LoggedInNav/LoggedInNav";


function Home({user, signedIn, setSignedIn}) {
  const loggedInUser = (
    <div>
      <LoggedInNav setSignedIn = {setSignedIn}/>
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
