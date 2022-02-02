import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <StyledContainer>
       <Header />
       <SpacesWrapper />
        <NavLink to="/expensetracker" alt="tracker">
          <StyledButton>Expense Tracker</StyledButton>
        </NavLink>

        <NavLink to="/secretplaces">
          <StyledButton>Secret Places</StyledButton>
        </NavLink>

        <NavLink to="/addForm">
          <StyledButton>Add New Trips</StyledButton>
        </NavLink>

        <NavLink to="/favourites">
          <StyledButton>Favourites</StyledButton>
        </NavLink>
      </StyledContainer>
    </div>
  );
};

export default Home;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  text-align: center;
  width: 90%;
`;

const SpacesWrapper = styled.div` 
margin: 1rem; 
`;

const StyledButton = styled.button`
  width: 80%;
  color: #ffffff;
  margin: 1rem 0rem 1rem 1rem;
  text-align: center;
  font-size: 16px;
  border-radius: 1rem;
  border: 4px solid var(--primary);
  background: var(--secondary);
  padding: 1rem;
  font-family: 'Klee One', cursive;
  cursor: pointer;
`;

