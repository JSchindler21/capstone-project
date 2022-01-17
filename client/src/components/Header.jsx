import styled from "styled-components";

const Header = () => {
  return <StyledHeader>Expense Tracker</StyledHeader>;
};

export default Header;

const StyledHeader = styled.header`
  color: var(--secondary);
  font-size: 2rem;
  text-shadow: 0 4px 2px var(--primary);
  text-align: center;
`;
