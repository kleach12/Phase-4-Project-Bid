import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
import { Navigate } from "react-router-dom";

function Home({
  signedIn,
  setSignedIn,
  allStores,
  setCurrentStore,
  setChosenStore,
  chosenStore,
  viewingStore,
  setStoreView,
}) {

  // const store = JSON.parse(localStorage.getItem('store'))

  const loggedInUser = (
    <div>
      <LoggedInNav setSignedIn={setSignedIn} />
      <Carosel
        allStores={allStores}
        setCurrentStore={setCurrentStore}
        setChosenStore={setChosenStore}
        chosenStore={chosenStore}
        viewingStore={viewingStore}
        setStoreView={setStoreView}
      />
    </div>
  );

  const emptyUser = (
    <div>
      <Navbar />
      <Carosel
        allStores={allStores}
        setCurrentStore={setCurrentStore}
        setChosenStore={setChosenStore}
        chosenStore={chosenStore}
        viewingStore={viewingStore}
        setStoreView={setStoreView}
      />
    </div>
  );
  return signedIn ? loggedInUser : emptyUser;
}

export default Home;
