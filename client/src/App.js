import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";
import Store from "./Store/Store";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [allStores, holdStores] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const [chosenStore, setChosenStore] = useState({ name: "" });
  const [viewingStore, setStoreView] = useState(false);
  const store = JSON.parse(localStorage.getItem('store'))
  console.log(viewingStore)
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data);
          setSignedIn(true);
          // console.log(data)
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
    fetch("/visitstore").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          // setCurrentStore(data);
          localStorage.setItem("store", JSON.stringify(data));
          if(data.error){
            setStoreView(false)
          }else{
            setStoreView(true)
          }
          console.log(data.error)
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
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
          path="/profile"
          element={
            <Profile user={user} setUser={setUser} setSignedIn={setSignedIn} />
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
