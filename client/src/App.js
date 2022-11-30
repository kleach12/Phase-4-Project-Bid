import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

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

  return (
    <div>
      <Routes>
        <Route
          path="/signup"
          element={<Signup setSignedIn={setSignedIn} signedIn={signedIn} />}
        />
        <Route
          path="/signin"
          element={<Signin setSignedIn={setSignedIn} signedIn={signedIn} />}
        />
        <Route
          path="/profile"
          element={<Profile user = {user} />}
        />
        <Route
          path="/"
          element={
            <Home user={user} signedIn={signedIn} setSignedIn={setSignedIn} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
