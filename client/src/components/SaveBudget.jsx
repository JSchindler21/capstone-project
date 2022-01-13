import React, { useState } from "react";
import styled from "styled-components";

const SaveBudget = (sum) => {
  const [value, setValue] = useState(sum.budget);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    sum.handleEditClick(value);
  };

  return (
    <>
      <Input
        placeholder="Click on Edit..."
        type="number"
        id="save"
        value={value}
        disabled
        onChange={handleChange}
      />{" "}
      ,- €
      <div>
        <button onClick={handleClick}>Edit</button>
      </div>
    </>
  );
};

export default SaveBudget;

const Input = styled.input`
  color: black;
  width: 20vh;
  text-align: center;
  font-size: 14px;
  border-radius: 1rem;
  border: none;
  background: grey;
  padding: 0.5rem;
  -moz-appearance: textfield;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
