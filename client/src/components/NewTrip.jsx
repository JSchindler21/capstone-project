import React, { useContext, useState } from "react";
import styled from "styled-components";

import AppContext from "../context/AppContext";
import SaveTrip from "./SaveTrip";
import EditTrip from "./EditTrip";

export const NewTrip = () => {
  const { trip, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (trip) => {
    dispatch({
      type: "SET_TRIP",
      payload: trip,
    });
    setIsEditing(false);
  };

  return (
    <div>
      <StyledTitle>Next Trip </StyledTitle>
      {isEditing ? (
        <EditTrip handleSaveClick={handleSaveClick} trip={trip} />
      ) : (
        <SaveTrip handleEditClick={handleEditClick} trip={trip} />
      )}
    </div>
  );
};

export default NewTrip;

const StyledTitle = styled.h3`
  margin: 1rem 1rem -0.5rem 0rem;
  color: var(--secondary);
  text-align: left;
`;
