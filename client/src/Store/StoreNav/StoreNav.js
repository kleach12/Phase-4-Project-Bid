import { Navigate } from "react-router-dom";
import "./StoreNav.css";

function StoreNav({ setStoreView, viewingStore }) {
  function handleHome() {
    fetch("/endStore", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setStoreView(false);
      localStorage.clear();
    });
  }

  if (viewingStore) {
    return (
      <nav id="store_nav">
        <div className="navleft">
          <h1>Bid</h1>
        </div>
        <div className="navcenter"></div>
        <div className="navright">
          <button onClick={handleHome} id="home">
            {" "}
            Home{" "}
          </button>
        </div>
      </nav>
    );
  }
  return <Navigate to={"/"} />;
}

export default StoreNav;
