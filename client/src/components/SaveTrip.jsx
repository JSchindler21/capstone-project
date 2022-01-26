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
 margin: 1rem -1rem auto;
`;

const StyledInput = styled.input`
  width: 90%;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  border-radius: 1rem;
  border: 2px solid var(--primary);
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
  border: 0.2rem solid var(--secondary);
  position: absolute;
  margin: 1rem -2rem;
  font-family: "Courgette";
  cursor: pointer;
`;
