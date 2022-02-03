import styled from "styled-components";
import { AppProvider } from "../context/AppContext";

import FooterNavbar from "../components/FooterNavbar";
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
          <h1> Expense Tracker</h1>
          <main>
            <NewTrip />
            <MyBudget />
            <HistoryList />
            <Remain />
            <Transaction />
          </main>
        </StyledContainer>
      </AppProvider>
        <FooterNavbar />
    </>
  );
};

export default ExpenseTracker;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 2rem; 
  text-align: center;
  width: 80%;
  padding-bottom: 5rem; 
`;
