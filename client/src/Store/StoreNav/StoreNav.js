import { Link } from "react-router-dom";
import "./StoreNav.css";

function StoreNav({ setCurrentStore }) {
  function handleHome() {
    fetch("/endStore", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setCurrentStore(null);
    });
  }
  
  return (
    <nav id="store_nav">
      <div className="navleft">
        <h1>Bid</h1>
      </div>
      <div className="navcenter"></div>
      <div className="navright">
        <Link to="/" style={{ textDecoration: "none" }} onClick={handleHome}>
          <button id="home"> Home </button>
        </Link>
      </div>
    </nav>
  );
}

export default StoreNav;
