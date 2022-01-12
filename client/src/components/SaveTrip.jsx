import React from "react";
import styled from "styled-components";
import { useState } from "react";

const SaveTrip = (props) => {
  const [name, setName] = useState(props.trip);

const handleChange = (event) => {
  setName(event.target.value)
 
}


  return (
    <form >
      
      <Input
        placeholder="click on edit..."
        type="name"
        id="name"
        value={name}
        disabled
        
        onChange={handleChange}
      />{" "}
      <button type="button" onClick={() => props.handleEditClick(name)}>
        Edit
      </button>
     
    </form>
  );
};

export default SaveTrip;

const Input = styled.input`
color: black;  
  width: 30vh;
  text-align: center;
  font-size: 16px;
  border-radius: 1rem;
  border: none;
  background: #348334;
  padding: 0.5rem;
  -moz-appearance: textfield;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const Warning = styled.span`
  color: red;
  font-size: 0.7rem;
`;