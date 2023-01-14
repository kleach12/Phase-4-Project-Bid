import { Navigate } from "react-router-dom";
import "./StoreNav.css";

function StoreNav({ setCurrentStore, setChosenStore, currentStore, setStoreView,viewingStore }) {
  function handleHome() {
    fetch("/endStore", {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setStoreView(false)
      // localStorage.clear()
      // setCurrentStore(null);
      // setChosenStore({ name: "" });
    });
  }

  if (viewingStore) {
    // return <Navigate to={"/"} />;
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
//   return (
//     <nav id="store_nav">
//       <div className="navleft">
//         <h1>Bid</h1>
//       </div>
//       <div className="navcenter"></div>
//       <div className="navright">
//         <button onClick={handleHome} id="home">
//           {" "}
//           Home{" "}
//         </button>
//       </div>
//     </nav>
//   );
}

export default StoreNav;
