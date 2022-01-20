import { useContext } from "react";
import styled from "styled-components";

import HistoryItem from "./HistoryItem";
import AppContext from "../context/AppContext";

const HistoryList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div>
      <StyledTitle> My History</StyledTitle>
      <ul>
        {expenses?.map((expense, key) => (
          <HistoryItem
            key={key}
            id={expense.id}
            nextTrip={expense.nextTrip}
            amount={expense.amount}
          />
        ))}
      </ul>
    </div>
  );
};

export default HistoryList;

const StyledTitle = styled.h3`
  margin: 3rem 1rem 1rem 0rem;
  color: var(--secondary);
  text-align: left;
`;
