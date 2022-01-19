import { useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

const HistoryItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <StyleList>
      {props.nextTrip}
      <div>
        <span>
          € {props.amount},-
          <Delete onClick={handleDelete}>🗑</Delete>
        </span>
      </div>
    </StyleList>
  );
};

export default HistoryItem;

const StyleList = styled.li`
width: 95%;
align-items: center;
  display: flex;
  flex-wrap: wrap;
  background: var(--primary);
  justify-content: space-between;
  margin: 0.3rem 0rem;
  font-size: 14px;
  padding: 0.5rem;
  border-radius: 1rem;
`;
const Delete = styled.div`
  position: absolute;
  margin: -1.2rem 4.2rem;
  cursor: pointer;
`;
