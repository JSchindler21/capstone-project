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
          <header> Expense Tracker</header>
          <main>
            <NewTrip />
            <MyBudget />
            <HistoryList />
            <Remain />
            <Transaction />
          </main>
        </StyledContainer>
        <FooterNavbar />
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
  padding: 1rem 1rem 4rem 1rem;
`;
