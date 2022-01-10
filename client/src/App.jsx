import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MyBudget from "./components/MyBudget";
import ExpanseIncome from "./components/ExpanseIncome";
import styled from "styled-components";

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
    <StyledContainer>
      <div>{myHeadline}</div>

      <Header />

     
        <MyBudget  />
       
       
        <ExpanseIncome />
      

      

      <footer>
        <nav></nav>
      </footer>
    </StyledContainer>
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
