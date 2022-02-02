import React, { useState } from "react";
import styled from "styled-components";

const EditTrip = (props) => {
  const [name, setName] = useState(props.trip);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleClick = () => {
    props.handleSaveClick(name);
  };

  return (
    <StyledContainer>
      <form>
        <Input
          type="name"
          id="name"
          placeholder="Enter next Trip..."
          value={name}
          onChange={handleChange}
        />{" "}
        <StyledButton onClick={handleClick}>Save</StyledButton>
      </form>
    </StyledContainer>
  );
};
export default EditTrip;

const StyledContainer = styled.div`
  margin: 1rem -1rem auto;
  
`;

const Input = styled.input`
  width: 90%;
  color: black;
  text-align: left;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 4px var(--secondary);
  background: var(--primary);
  padding: 0.5rem;
  font-family: 'Klee One', cursive;
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
