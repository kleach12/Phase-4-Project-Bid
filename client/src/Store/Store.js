import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";
import { Navigate } from "react-router-dom";
function Store({
  currentStore,
  setCurrentStore,
  setChosenStore,
  setStoreView,
  viewingStore,
  storeOwner
}) {
  const store = JSON.parse(localStorage.getItem("store"));
  console.log(storeOwner);
  if (viewingStore) {
    // return <Navigate to={"/"} />;
    return (
      <div>
        <StoreNav
          setCurrentStore={setCurrentStore}
          setChosenStore={setChosenStore}
          currentStore={currentStore}
          setStoreView={setStoreView}
          viewingStore={viewingStore}
        />
        <StoreBanner />
      </div>
    );
  }
  else if (viewingStore === false){
    return <Navigate to={"/"} />;
    // return <h2>Loading...</h2>;
    // return (
    //   <div>
    //     <StoreNav
    //       setCurrentStore={setCurrentStore}
    //       setChosenStore={setChosenStore}
    //       currentStore={currentStore}
    //       setStoreView={setStoreView}
    //       viewingStore={viewingStore}
    //     />
    //     <StoreBanner currentStore={currentStore} />
    //   </div>
    // );
  }
  // return <Navigate to={"/"} />;
  return <h2>Loading...</h2>;
}

export default Store;
