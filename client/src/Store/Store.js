import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";
import { useEffect } from "react";


function Store({currentStore, setCurrentStore}) {

  // useEffect(() => {
  //   fetch("/visitstore").then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => {
  //         console.log(data)
  //         setCurrentStore(data);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <StoreNav setCurrentStore = {setCurrentStore} />
      <StoreBanner currentStore = {currentStore}/>
      {/* <h2 id = 'store_title'> {currentStore.name}</h2> */}
    </div>
  );
}

export default Store;
