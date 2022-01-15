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
       
        <div>
          <StyledButton type="button" onClick={handleClick}>
            Save
          </StyledButton>
        </div>
      </form>
    </StyledContainer>
  );
};

export default EditBudget;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: 1rem auto;
  width: 90%;
  
`;

const StyledInput = styled.input`
  color: black;
  
  text-align: center;
  font-size: 16px;
  font-family: "Courgette";
  border-radius: 0.5rem;
  border: 4px var(--secondary);
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
  font-size: 16px;
  color: #ffffff;
  background: var(--primary);
  border: 0.3rem solid var(--secondary);
  position: absolute;
  margin: -3rem 4.5rem;
  font-family: "Courgette";
`;