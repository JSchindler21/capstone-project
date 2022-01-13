import React, { useContext, useState } from "react";
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
      <h3>My Travel Destination </h3>
      {isEditing ? (
        <EditTrip handleSaveClick={handleSaveClick} trip={trip} />
      ) : (
        <SaveTrip handleEditClick={handleEditClick} trip={trip} />
      )}
    </div>
  );
};

export default NewTrip;
