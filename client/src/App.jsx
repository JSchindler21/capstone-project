import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MyBudget from "./components/MyBudget";
import ExpanseIncome from "./components/ExpanseIncome";
import styled from "styled-components/";

function App() {
  const [myHeadline, setMyHeadline] = useState("");

  useEffect(() => {
    const fetchMyHeadline = async () => {
      const res = await fetch("http://localhost:7000/api");
      const data = await res.json();
      setMyHeadline(data.message);
    };

    fetchMyHeadline();
  }, []);

  return (
    <StyledContainer>
      <div>{myHeadline}</div>

      <Header />

      <div>
        <label htmlFor="NewTrip">My new Trip: </label>
        <input type="text" placeholder="next travel destination..." />
        <button>edit</button>
        <MyBudget />

        <label htmlFor="history"> My History</label>
        <ul>
          <li> Flug
            <span>€ 980,-</span>
            <button>delete</button>
          </li>
        </ul>
        <form>
          <>
            <label htmlFor="NewTrip"> Add a new Expanse/Income </label>
            <input type="text" placeholder="new Expanse/Income..." />
          </>
          <>
            <label htmlFor="NewTrip">Add a new Amount with + or - </label>
            <input type="number" placeholder="new Amount..." />
          </>
          <button>Submit new transaction</button>
        </form>
        <ExpanseIncome />
      </div>

      <main></main>

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
