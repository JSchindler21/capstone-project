import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MyBudget from "./components/MyBudget";
import Total from "./components/Total";
import styled from "styled-components";
import { AppProvider } from "./context/AppContext";
import NewTrip from "./components/NewTrip";

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
    <AppProvider>
      <StyledContainer>
        <div>{myHeadline}</div>

        <Header />

        <div>
          <NewTrip />
          <MyBudget />
          <Total />
        </div>

        <main></main>

        <footer>
          <nav></nav>
        </footer>
      </StyledContainer>
    </AppProvider>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #d1ffd1;
  margin: 2rem;
  text-align: center;
  padding: 2rem;
`;
