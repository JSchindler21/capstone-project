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
      <form >
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
  position: relative;
  margin: 1rem auto;
  align-items: center;
`;


const Input = styled.input`
   display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  color: black;
  text-align: center;
  font-size: 16px;
  border-radius: 0.5rem;
  border: 4px var(--secondary);
  background: var(--primary);
  padding: 0.5rem;
  font-family: "Courgette";
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
  margin: -2rem 5rem;
  font-family: "Courgette";
  cursor: pointer;
`;

