import React, { useState } from "react";
import AppContext from "../context/AppContext";
import { useContext } from "react";
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
       <h3>My Budget</h3>

      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <SaveBudget handleEditClick={handleEditClick} budget={budget} />
      )}

    </div>
  );
};

export default MyBudget;
