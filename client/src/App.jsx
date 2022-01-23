import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ExpenseTracker from "./pages/ExpenseTracker.jsx";
import SecretPlaces from "./pages/SecretPlaces.jsx";
import MyProfil from "./pages/MyProfil.jsx";
import Favourites from "./pages/Favourites.jsx";

function App() {
  
  const [allTrips, setAllTrips] = useState([]);
  console.log(allTrips)
  useEffect(() => {  
  async function fetchTrips (){
    try{  
    const res = await fetch("/api/trips");
    const data = await res.json();
   

    const allDataTrip = data.map((trip, index) => {
      return {
        id: index.id,
        country: trip.country,
        category: trip.category,
        name: trip.name,
        tags: trip.tags,
        image: trip.image,
      };
    });

    setAllTrips(allDataTrip);
  } catch (e) {
    console.error(e)
}
}
return fetchTrips()
}, [])

const [favCards, setFavCards] = useState([]); 


function addToFav(favToAddCard) {
if (favCards.some(
    (everyFavCard) => 
    everyFavCard.id === favToAddCard.id
  )
){
  const updatedFavCard = favCards.filter(
    (everyFavCard) => 
    everyFavCard.id !== favToAddCard.id
  )
    setFavCards(updatedFavCard)
} else {
  setFavCards([...favCards, favToAddCard])
}
}




  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/secretplaces" element={<SecretPlaces trip={allTrips} onAddToFav={addToFav} favCards={favCards}/>} />
        <Route path="/myprofil" element={<MyProfil />} />
        <Route path="/favourites" element={<Favourites favTrip={favCards} onAddToFav={addToFav} favCards={favCards}/>} />
      </Routes>
    </div>
  );
}

export default App;
