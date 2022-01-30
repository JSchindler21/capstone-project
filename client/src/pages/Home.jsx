import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <StyledContainer>
        <header>Travel like a Pro</header>
        <WrapperSpace />

        <NavLink to="/expensetracker" alt="tracker">
          <StyledButton>Expense Tracker</StyledButton>
        </NavLink>

        <NavLink to="/secretplaces">
          <StyledButton>Secret Places</StyledButton>
        </NavLink>

        <NavLink to="/account">
          <StyledButton>Account</StyledButton>
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
  margin: 5rem auto;
  text-align: center;
  padding: 1rem 1rem 4rem 1rem;
`;

const WrapperSpace = styled.div`
  margin-top: 6rem;
`;

const StyledButton = styled.button`
  width: 80%;
  color: #ffffff;
  margin: 1rem;
  text-align: center;
  font-size: 16px;
  border-radius: 1rem;
  border: 4px solid var(--primary);
  background: var(--secondary);
  padding: 1rem;
  font-family: "Courgette";
  cursor: pointer;
`;
