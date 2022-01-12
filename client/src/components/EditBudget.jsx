import React, { useState } from "react";
import styled from "styled-components";


const EditBudget = (sum) => {
  const [value, setValue] = useState(sum.budget);
  

  
  const handleClick = () => {
    sum.handleSaveClick(value)
  }

const handleChange = (event) => { 
  setValue(event.target.value)
    
  };
  
 

  

  return (
    <>
    
      <Input
        type="Number"
        id="edit"
        value={value}
        placeholder="Enter your Budget..."
        onChange={handleChange}
        
        />{" "}
       
      ,- €
      <button type="button" onClick={handleClick}>
        Save
      </button>
      </>
  
  );
}

export default EditBudget;

const Input = styled.input`
  width: 20vh;
  text-align: center;
  font-size: 14px;
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
