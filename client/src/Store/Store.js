import StoreNav from "./StoreNav/StoreNav";
import StoreBanner from "./StoreBanner/StoreBanner";

function Store({
  currentStore,
  setCurrentStore,
  setChosenStore,
  setStoreView,
  viewingStore
}) {
  return (
    <div>
      <StoreNav
        setCurrentStore={setCurrentStore}
        setChosenStore={setChosenStore}
        currentStore={currentStore}
        setStoreView={setStoreView}
        viewingStore={viewingStore}
      />
      <StoreBanner currentStore={currentStore} />
      {/* <h2 id = 'store_title'> {currentStore.name}</h2> */}
    </div>
  );
}

export default Store;
