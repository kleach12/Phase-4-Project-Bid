import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from "./LoggedInNav/LoggedInNav";

function Home({ signedIn, setSignedIn, allStores }) {
  const loggedInUser = (
    <div>
      <LoggedInNav setSignedIn={setSignedIn} />
      <Carosel allStores={allStores} />
    </div>
  );

  const emptyUser = (
    <div>
      <Navbar />
      <Carosel allStores={allStores} />
    </div>
  );

  return signedIn ? loggedInUser : emptyUser;
}

export default Home;
