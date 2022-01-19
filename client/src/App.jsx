import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home.jsx";
import ExpenseTracker from "./pages/ExpenseTracker.jsx";
import SecretPlaces from "./pages/SecretPlaces.jsx";
import MyProfil from "./pages/MyProfil.jsx";
import Favourites from "./pages/Favourites.jsx";

function App() {
  const [myHeadline, setMyHeadline] = useState("");

  useEffect(() => {
    const fetchMyHeadline = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setMyHeadline(data.message);
    };

    fetchMyHeadline();
  }, []);




  return (
    <div>
      <div> {myHeadline} </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expensetracker" element={<ExpenseTracker />} />
        <Route path="/secretplaces" element={<SecretPlaces />} />
        <Route path="/myprofil" element={<MyProfil />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
