import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
        <button id = "signin"> Sign in </button>
        <button id = "signup"> Log out </button>
      </div>
    </nav>
  );
}

export default Navbar;
