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
          placeholder="Click on Edit..."
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
  position: relative;
  margin: 1rem auto;
  align-items: center;
`;

const StyledInput = styled.input`
  display: flex:
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  border-radius: 1rem;
  border: 4px solid var(--primary);
  background: var(--secondary);
  padding: 0.5rem;
  -moz-appearance: textfield;
  font-family: "Courgette";
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 1rem;
  font-size: 16px;
  color: #ffffff;
  background: var(--primary);
  border: 0.3rem solid var(--secondary);
  position: absolute;
  margin: 1rem -2rem;
  font-family: "Courgette";
`;


