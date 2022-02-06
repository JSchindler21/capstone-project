import { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const Remain = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses?.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div>
      <div>
        <StyledTitle>The Rest </StyledTitle>
        <StyledGraph> € {budget - totalExpenses},- </StyledGraph>
      </div>
    </div>
  );
};

export default Remain;

const StyledTitle = styled.h3`
  margin: 1rem 0rem -1rem 0rem;
  color: var(--secondary);
  text-align: left;
  font-size: 16px;
`;

const StyledGraph = styled.p`
  text-align: right;
  font-size: 16px;
  background: grey;
  margin: 1rem 0rem 1rem 9rem;
  padding: 0.8rem;
  border-radius: 1rem;
  border: 0.2rem solid var(--primary);
`;
