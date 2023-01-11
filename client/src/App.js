import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import DeleteProfile from "./DeleteProfile/DeleteProfile";
import Store from "./Store/Store";
import "./App.css";
// import { Navigate } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [allStores, holdStores] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);

  // function handleStore(currStore) {
  //   const formData = {
  //     name: currStore.name,
  //   };
  //   fetch("/currstore", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   }).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //         setCurrentStore(data);
  //         <Navigate to="/store" replace={true} />;
  //       });
  //     }
  //   });
  // }

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
    fetch("/visitstore").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data)
          setCurrentStore(data);
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
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
