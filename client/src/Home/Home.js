import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from "./LoggedInNav/LoggedInNav";

function Home({ signedIn, setSignedIn, allStores, setCurrentStore }) {
  const loggedInUser = (
    <div>
      <LoggedInNav setSignedIn={setSignedIn} />
      <Carosel allStores={allStores} setCurrentStore = {setCurrentStore} />
    </div>
  );

  const emptyUser = (
    <div>
      <Navbar />
      <Carosel allStores={allStores} setCurrentStore = {setCurrentStore} />
    </div>
  );

  return signedIn ? loggedInUser : emptyUser;
}

export default Home;
