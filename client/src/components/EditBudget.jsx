import React, { useState } from "react";
import styled from "styled-components";

const EditBudget = (sum) => {
  const [value, setValue] = useState(sum.budget);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => {
    sum.handleSaveClick(value);
  };

  return (
    <StyledContainer>
      <form>
        <StyledInput
          type="Number"
          id="edit"
          value={value}
          placeholder="Enter your Budget..."
          onChange={handleChange}
        />{" "}
        <StyledButton type="button" onClick={handleClick}>
          Save
        </StyledButton>
      </form>
    </StyledContainer>
  );
};

export default EditBudget;

const StyledContainer = styled.div`
  margin: 1rem -1rem auto;
`;

const StyledInput = styled.input`
  width: 90%;
  color: black;
  text-align: left;
  font-size: 14px;
  font-family: 'Klee One', cursive;
  border-radius: 0.5rem;
  border: 3px var(--secondary);
  background: var(--primary);
  padding: 0.5rem;
  -moz-appearance: textfield;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 13px;
  color: #ffffff;
  background: var(--primary);
  border: 0.2rem solid var(--secondary);
  position: absolute;
  margin: 1rem -2rem;
  font-family: 'Klee One', cursive;
  cursor: pointer;
`;
