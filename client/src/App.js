import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";
import Store from "./Store/Store";
import StoreOrUser from "./StoreOrUser/StoreOrUser";
import StoreSignIn from "./StoreSignIn/StoreSignIn";
import SignUpChoice from "./SignUpChoice/SignUpChoice";
import StoreSignUp from "./StoreSignUp/StoreSignUp";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [storeOwner, setStoreOwner] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [allStores, holdStores] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const [chosenStore, setChosenStore] = useState({ name: "" });
  const [viewingStore, setStoreView] = useState(false);
  console.log(storeOwner)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
          setSignedIn(true);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/stores").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          holdStores(data);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/storeme").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setStoreOwner(data);
          setSignedIn(true);
        });
      }
    });
  }, []);

  function newStore(store) {
    holdStores([...allStores, store]);
  }

  return (
    <div>
      <Routes>
        <Route path="/storeoruser" element={<StoreOrUser />} />
        <Route path="/signupchoice" element={<SignUpChoice />} />
        <Route
          path="/signup"
          element={
            <Signup
              setSignedIn={setSignedIn}
              signedIn={signedIn}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Signin
              setSignedIn={setSignedIn}
              signedIn={signedIn}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/storesignin"
          element={
            <StoreSignIn
              setSignedIn={setSignedIn}
              signedIn={signedIn}
              setStoreOwner={setStoreOwner}
            />
          }
        />
        <Route
          path="/storesignup"
          element={
            <StoreSignUp
              setSignedIn={setSignedIn}
              signedIn={signedIn}
              setStoreOwner={setStoreOwner}
              newStore={newStore}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              setSignedIn={setSignedIn}
              storeOwner={storeOwner}
              setStoreOwner={setStoreOwner}
            />
          }
        />
        <Route
          path="/delete"
          element={
            <DeleteProfile
              user={user}
              setUser={setUser}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
            />
          }
        />
        <Route
          path="/store"
          element={
            <Store
              currentStore={currentStore}
              setCurrentStore={setCurrentStore}
              setChosenStore={setChosenStore}
              setStoreView={setStoreView}
              viewingStore={viewingStore}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              user={user}
              setUser = {setUser}
              storeOwner={storeOwner}
              setStoreOwner = {setStoreOwner}
              signedIn={signedIn}
              setSignedIn={setSignedIn}
              allStores={allStores}
              setCurrentStore={setCurrentStore}
              setChosenStore={setChosenStore}
              chosenStore={chosenStore}
              viewingStore={viewingStore}
              setStoreView={setStoreView}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
