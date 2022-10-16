import "./Signin.css";
import Typed from "react-typed";

function Signin() {
  return (
    <div id="signin">
      <Typed
        strings={[
          "Welcome back!",
          "Are you excited to start bidding?",
          "Who are you again?",
        ]}
        typeSpeed={40}
      />
      <br />

      <Typed
        strings={[
          "Enter username"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
      <Typed
        strings={[
          "Enter Password"
        ]}
        typeSpeed={40}
        backSpeed={50}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
    </div>
  );
}

export default Signin;
