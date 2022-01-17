import { useEffect, useState } from "react";
// import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { AppProvider } from "./context/AppContext";

import Header from "./components/Header";
import FooterNavbar from "./components/FooterNavbar";

import {Home} from "./pages/Home.jsx";
import {ExpenseTracker} from "./pages/ExpenseTracker.jsx";
import {SecretPlaces} from "./pages/SecretPlaces.jsx";
import {MyProfil} from "./pages/MyProfil.jsx";
import {Favourites} from "./pages/Favourites.jsx";

// import MyBudget from "./components/MyBudget";
// import Remain from "./components/Remain";
// import NewTrip from "./components/NewTrip";
// import Transaction from "./components/Transaction";
// import HistoryList from "./components/HistoryList";

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
      <><AppProvider>
      {/* <StyledContainer> */}
        <div>{myHeadline}</div>
        {/*
              <Header />
    
              <main>
                <NewTrip />
                <MyBudget />
    
                <HistoryList />
    
                <Remain />
                <Transaction />
              </main>
    
              <footer>
                <nav></nav>
              </footer> */}
      {/* </StyledContainer> */}
   

        <Header />
        <div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/expensetracker" element={<ExpenseTracker />} />
            <Route path="/secretplaces" element={<SecretPlaces />} />
            <Route path="/myprofil" element={<MyProfil />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </div>
        <FooterNavbar />
        </AppProvider><>
      </></>
    
  );
}

export default App;

// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 2rem;
//   text-align: center;
//   padding: 2rem;
// `;
