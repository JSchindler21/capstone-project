import React, { useState, useContext } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";

import EditBudget from "./EditBudget";
import SaveBudget from "./SaveBudget";

const MyBudget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <StyledTitle>My Budget</StyledTitle>

      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <SaveBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default MyBudget;

const StyledTitle = styled.h3`
  margin: 3rem 1rem -0.5rem 0rem;
  color: var(--secondary);
  text-align: left;
`;
