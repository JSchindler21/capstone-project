import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ExpenseTracker from "./pages/ExpenseTracker.jsx";
import SecretPlaces from "./pages/SecretPlaces.jsx";
import MyProfil from "./pages/MyProfil.jsx";
import Favourites from "./pages/Favourites.jsx";

function App() {
  const [allTrips, setAllTrips] = useState([]);
  

  useEffect(() => {
    async function fetchTrips() {
      try {
        const res = await fetch("/api/trips");
        const data = await res.json();

        const allDataTrip = data.map((trip) => {
          return {
            id: trip._id,
            country: trip.country,
            category: trip.category,
            name: trip.name,
            tags: trip.tags,
            imgUrl: trip.imgUrl,
          };
        });

        setAllTrips(allDataTrip);
      } catch (e) {
        console.error(e);
      }
    }
    return fetchTrips();
  }, []);

  const [favouriteTrips, setFavouriteTrips] = useState([]);

  function addToFavourites(tripToAdd) {
    if (
      favouriteTrips.some(
        (everyFavouriteTrip) => everyFavouriteTrip.id === tripToAdd.id
      )
    ) {
     const updatedFavouriteTrips = favouriteTrips.filter(
          (everyFavouriteTrip) => everyFavouriteTrip.id !== tripToAdd.id
        )
      setFavouriteTrips(updatedFavouriteTrips)
    } else {
      setFavouriteTrips([...favouriteTrips, tripToAdd]);
    }
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route
          path="/secretplaces"
          element={
            <SecretPlaces
              AllTrips={allTrips}
              onAddToFavourites={addToFavourites}
              favouriteTrips={favouriteTrips}
            />
          }
        />
        <Route path="/myprofil" element={<MyProfil />} />
        <Route
          path="/favourites"
          element={
            <Favourites
              onAddToFavourites={addToFavourites}
              favouriteTrips={favouriteTrips}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
