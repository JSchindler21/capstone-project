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
        info: trip.info, 
        tags: trip.tags,
        imgUrl: trip.imgUrl,
      };
    });

    setAllTrips(allDataTrip);
  } catch (e) {
    console.error(e)
}
}
return fetchTrips()
}, [])



  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/secretplaces" element={<SecretPlaces trip={allTrips} />} />
        <Route path="/myprofil" element={<MyProfil />} />
        <Route path="/favourites" element={<Favourites  />} />
      </Routes>
    </div>
  );
}

export default App;
