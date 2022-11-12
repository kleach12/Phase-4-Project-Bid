import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data)
          setUser(data)
        });
      }
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin setSignedIn = {setSignedIn} signedIn = {signedIn}/>
        </Route>
        <Route path="/">
          <Home user = {user} signedIn = {signedIn}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
