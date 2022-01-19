import { useState } from "react";
import styled from "styled-components";

const SaveTrip = (props) => {
  const [name, setName] = useState(props.trip);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    props.handleEditClick(name);
  };

  return (
    <StyledContainer>
      <form>
        <StyledInput
          placeholder="Click on edit..."
          type="name"
          id="name"
          value={name}
          disabled
          onChange={handleChange}
        />{" "}
        <StyledButton type="button" onClick={handleClick}>
          Edit
        </StyledButton>
      </form>
    </StyledContainer>
  );
};

export default SaveTrip;

const StyledContainer = styled.div`
  position: relative;
  margin: 1rem auto;
  align-items: center;
`;

const StyledInput = styled.input`
  display: flex;
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
