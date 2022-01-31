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
    <StyledContainer>
      <form>
        <StyledInput
          placeholder="Click on edit..."
          type="number"
          id="save"
          value={value}
          disabled
          onChange={handleChange}
        />{" "}
          <StyledButton onClick={handleClick}>Edit</StyledButton>
      </form>
    </StyledContainer>
  );
};

export default SaveBudget;

const StyledContainer = styled.div`
  margin: 1rem -1rem auto;
`;

const StyledInput = styled.input`
  width: 90%;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-family: 'Klee One', cursive;
  border-radius: 0.8rem;
  border: 2px solid var(--primary);
  background: var(--secondary);
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

