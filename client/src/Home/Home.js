import "./Home.css";
import Navbar from "./Navbar/Navbar";
import Carosel from "./Carosel/Carosel";
import LoggedInNav from "./LoggedInNav/LoggedInNav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home({
  signedIn,
  setSignedIn,
  allStores,
  setCurrentStore,
  setChosenStore,
  chosenStore,
  viewingStore,
  setStoreView,
  user,
  setUser,
  storeOwner,
  setStoreOwner,
  items,
}) {
  // const store = JSON.parse(localStorage.getItem('store'))
  console.log(items === null);
  // const loggedInUser = (
  //   <div>
  //     <LoggedInNav
  //       setSignedIn={setSignedIn}
  //       user={user}
  //       storeOwner={storeOwner}
  //       signedIn={signedIn}
  //       setStoreOwner={setStoreOwner}
  //       setUser={setUser}
  //     />
  //     <Carosel
  //       allStores={allStores}
  //       setCurrentStore={setCurrentStore}
  //       setChosenStore={setChosenStore}
  //       chosenStore={chosenStore}
  //       viewingStore={viewingStore}
  //       setStoreView={setStoreView}
  //     />
  //     {items.map((item) => {
  //           return (
  //             <Card bg={"black"} key={item.id} style={{ width: "18rem" }} className = 'grid-item'>
  //               <Card.Img variant="top" src={item.picture} className = 'card-img'/>
  //               <Card.Body>
  //                 <Card.Title className = 'card-title'>{item.name}</Card.Title>
  //                 <Card.Text className = 'card-price'>${item.price}</Card.Text>
  //                 <Button variant="custom">Buy</Button>
  //               </Card.Body>
  //             </Card>
  //           );
  //         })}
  //   </div>
  // );

  // const emptyUser = (
  //   <div>
  //     <Navbar />
  //     <Carosel
  //       allStores={allStores}
  //       setCurrentStore={setCurrentStore}
  //       setChosenStore={setChosenStore}
  //       chosenStore={chosenStore}
  //       viewingStore={viewingStore}
  //       setStoreView={setStoreView}
  //     />
  //     <h1>{items}</h1>
  //     {items.map((item) => {
  //       return (
  //         <Card
  //           bg={"black"}
  //           key={item.id}
  //           style={{ width: "18rem" }}
  //           className="grid-item"
  //         >
  //           <Card.Img variant="top" src={item.picture} className="card-img" />
  //           <Card.Body>
  //             <Card.Title className="card-title">{item.name}</Card.Title>
  //             <Card.Text className="card-price">${item.price}</Card.Text>
  //             <Button variant="custom">Buy</Button>
  //           </Card.Body>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );
if(items){
  if (signedIn) {
    return (
      <div>
        <LoggedInNav
          setSignedIn={setSignedIn}
          user={user}
          storeOwner={storeOwner}
          signedIn={signedIn}
          setStoreOwner={setStoreOwner}
          setUser={setUser}
        />
        <Carosel
          allStores={allStores}
          setCurrentStore={setCurrentStore}
          setChosenStore={setChosenStore}
          chosenStore={chosenStore}
          viewingStore={viewingStore}
          setStoreView={setStoreView}
        />
        {items.map((item) => {
          return (
            <Card
              bg={"black"}
              key={item.id}
              style={{ width: "18rem" }}
              className="grid-item"
            >
              <Card.Img variant="top" src={item.picture} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text className="card-price">${item.price}</Card.Text>
                <Button variant="custom">Buy</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  } else if(signedIn === false){
    return (
      <div>
        <Navbar />
        <Carosel
          allStores={allStores}
          setCurrentStore={setCurrentStore}
          setChosenStore={setChosenStore}
          chosenStore={chosenStore}
          viewingStore={viewingStore}
          setStoreView={setStoreView}
        />
        {/* <h1>{items}</h1> */}
        {items.map((item) => {
          return (
            <Card
              bg={"black"}
              key={item.id}
              style={{ width: "18rem" }}
              className="grid-item"
            >
              <Card.Img variant="top" src={item.picture} className="card-img" />
              <Card.Body>
                <Card.Title className="card-title">{item.name}</Card.Title>
                <Card.Text className="card-price">${item.price}</Card.Text>
                <Button variant="custom">Buy</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
  // return (
  //   <div>
  //     <Navbar />
  //     <Carosel
  //       allStores={allStores}
  //       setCurrentStore={setCurrentStore}
  //       setChosenStore={setChosenStore}
  //       chosenStore={chosenStore}
  //       viewingStore={viewingStore}
  //       setStoreView={setStoreView}
  //     />
  //     {/* <h1>{items}</h1> */}
  //     {items.map((item) => {
  //       return (
  //         <Card
  //           bg={"black"}
  //           key={item.id}
  //           style={{ width: "18rem" }}
  //           className="grid-item"
  //         >
  //           <Card.Img variant="top" src={item.picture} className="card-img" />
  //           <Card.Body>
  //             <Card.Title className="card-title">{item.name}</Card.Title>
  //             <Card.Text className="card-price">${item.price}</Card.Text>
  //             <Button variant="custom">Buy</Button>
  //           </Card.Body>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );
}
  // if (signedIn ) {
  //   return (
  //     <div>
  //       <LoggedInNav
  //         setSignedIn={setSignedIn}
  //         user={user}
  //         storeOwner={storeOwner}
  //         signedIn={signedIn}
  //         setStoreOwner={setStoreOwner}
  //         setUser={setUser}
  //       />
  //       <Carosel
  //         allStores={allStores}
  //         setCurrentStore={setCurrentStore}
  //         setChosenStore={setChosenStore}
  //         chosenStore={chosenStore}
  //         viewingStore={viewingStore}
  //         setStoreView={setStoreView}
  //       />
  //       {items.map((item) => {
  //         return (
  //           <Card
  //             bg={"black"}
  //             key={item.id}
  //             style={{ width: "18rem" }}
  //             className="grid-item"
  //           >
  //             <Card.Img variant="top" src={item.picture} className="card-img" />
  //             <Card.Body>
  //               <Card.Title className="card-title">{item.name}</Card.Title>
  //               <Card.Text className="card-price">${item.price}</Card.Text>
  //               <Button variant="custom">Buy</Button>
  //             </Card.Body>
  //           </Card>
  //         );
  //       })}
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <Navbar />
  //     <Carosel
  //       allStores={allStores}
  //       setCurrentStore={setCurrentStore}
  //       setChosenStore={setChosenStore}
  //       chosenStore={chosenStore}
  //       viewingStore={viewingStore}
  //       setStoreView={setStoreView}
  //     />
  //     {/* <h1>{items}</h1> */}
  //     {items.map((item) => {
  //       return (
  //         <Card
  //           bg={"black"}
  //           key={item.id}
  //           style={{ width: "18rem" }}
  //           className="grid-item"
  //         >
  //           <Card.Img variant="top" src={item.picture} className="card-img" />
  //           <Card.Body>
  //             <Card.Title className="card-title">{item.name}</Card.Title>
  //             <Card.Text className="card-price">${item.price}</Card.Text>
  //             <Button variant="custom">Buy</Button>
  //           </Card.Body>
  //         </Card>
  //       );
  //     })}
  //   </div>
  // );
}

export default Home;
