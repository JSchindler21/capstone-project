import styled from "styled-components";
import { AppProvider } from "../context/AppContext";
import Header from "../components/Header";

import MyBudget from "../components/MyBudget";
import Remain from "../components/Remain";
import NewTrip from "../components/NewTrip";
import Transaction from "../components/Transaction";
import HistoryList from "../components/HistoryList";

const ExpenseTracker = () => {
  return (
    <>
      <AppProvider>
        <StyledContainer>
          <StyledHeader> Expense Tracker</StyledHeader>
            
          <main>
            <NewTrip />
            <MyBudget />

            <HistoryList />

            <Remain />
            <Transaction />
          </main>
        </StyledContainer>
      </AppProvider>
    </>
  );
};

export default ExpenseTracker;

const StyledContainer = styled.div`
  display: flex; 
  flex-direction: column;
  margin: 2rem;
  text-align: center;
  /* padding: 2rem; */

`;

const StyledHeader = styled.header`
  color: var(--secondary);
  font-size: 2rem;
  text-shadow: 0 4px 2px var(--primary);
 
`;