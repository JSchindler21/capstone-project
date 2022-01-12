import React, { useState } from "react";
import styled from "styled-components";



const EditTrip = (props) => {
  const [name, setName] = useState(props.trip);

  

  return (
    <>
      
      <Input
        type="name"
        id="name"
        placeholder="Enter your next Destination..."
        value={name}
        
        onChange={(event) => setName(event.target.value)}
      />{" "}
      
      <button onClick={() => props.handleSaveClick(name)}>Save</button>
    </>
  );
};
  export default EditTrip;
  
  
  const Input = styled.input`
    width: 30vh;
    text-align: center;
    font-size: 16px;
    border-radius: 0.5rem;
    border: 1px solid grey;
    background: #ebe4e4;
    padding: 0.5rem;
    -moz-appearance: textfield;
  
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  `;
  