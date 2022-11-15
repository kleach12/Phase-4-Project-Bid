import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
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
          console.log(data);
          setUser(data);
        });
      }
    });
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup setSignedIn={setSignedIn} signedIn={signedIn}/>} />
        <Route path="/signin" element={<Signin setSignedIn={setSignedIn} signedIn={signedIn} />} />
        <Route path="/" element={<Home user={user} signedIn={signedIn} setSignedIn ={setSignedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;
