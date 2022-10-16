import Home from "./Home/Home";
import Signin from "./SignIn/Signin";
import Signup from "./Signup/Signup";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
