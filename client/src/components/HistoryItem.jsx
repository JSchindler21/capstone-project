import { useContext } from "react";
import styled from "styled-components";

import trash from "../images/trash.svg";
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
      <div className="grid1">{props.nextTrip}</div>
      <div className="grid2">€ {props.amount},-</div>
      <div className="grid3">
        <Delete onClick={handleDelete}>
          <img src={trash} alt="trash" />
        </Delete>
      </div>
    </StyleList>
  );
};

export default HistoryItem;

const StyleList = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: left;
  background: var(--primary);
  font-size: 16px;
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 0.5rem;
  border: 0.13rem solid var(--secondary);
  .grid1 {
    grid-column: 1;
  }
  .grid2 {
    grid-column: 3;
  }
  .grid3 {
    grid-column: 4;
  }
`;
const Delete = styled.div`
  cursor: pointer;
`;
