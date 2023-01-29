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
import NewItem from "./Profile/NewItem/NewItem";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [storeOwner, setStoreOwner] = useState(null);
  const [items, setItem] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [allStores, holdStores] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const [chosenStore, setChosenStore] = useState({ name: "" });
  const [viewingStore, setStoreView] = useState(false);
  const [triggerRender, setTriggerRender] = useState(false);
  const [newItem, setnewItem] = useState(null);
  function getStore() {
    fetch("/stores").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          holdStores(data);
        });
      }
    });
  }
  // Retrieves the logged in user
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          setUser(data);
          setSignedIn(true);
        });
      }
    });
  }, []);

  // Retrieve the logged in store runner
  useEffect(() => {
    fetch("/storeme").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          if (data.error) {
            console.log(data);
          } else {
            setStoreOwner(data);
            setSignedIn(true);
          }
        });
      }
    });
  }, [triggerRender]);
  // Retrieves the items that can be viewed on the home page
  useEffect(() => {
    fetch("/items").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // console.log(data);
          setItem(data);
        });
      }
    });
  }, []);

  // Retrieves all the store information for users to view and access the stores
  useEffect(() => {
    getStore();
  }, [triggerRender]);

  function newStore(store) {
    holdStores([...allStores, store]);
  }

  // function neItems(newItem){
  //   storeOwner.items()
  // }

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
              triggerRender={triggerRender}
              setTriggerRender={setTriggerRender}
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
          path="/newitem"
          element={
            <NewItem
              storeOwner={storeOwner}
              setTriggerRender={setTriggerRender}
              triggerRender={triggerRender}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              user={user}
              setUser={setUser}
              storeOwner={storeOwner}
              setStoreOwner={setStoreOwner}
              items={items}
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
