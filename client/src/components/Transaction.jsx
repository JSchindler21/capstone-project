import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import AppContext from "../context/AppContext";

const Transaction = () => {
  const { dispatch } = useContext(AppContext);

  const [nextTrip, setnextTrip] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      nextTrip,
      amount: parseInt(amount),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setnextTrip("");
    setAmount("");
  };

  const handleTextChange = (event) => {
    event.preventDefault();
    setnextTrip(event.target.value);
  };

  const handleNumberChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <StyledTitle> Add new Transaction </StyledTitle>
      <StyledContainer>
        <form onSubmit={onSubmit}>
          <StyledLabel htmlFor="text">new Expense</StyledLabel>
          <StyledInput
            id="nexttrip"
            type="text"
            placeholder="Enter text..."
            value={nextTrip}
            onChange={handleTextChange}
          />
          <StyledLabel htmlFor="amount">Amount</StyledLabel>
          <StyledInput
            id="amount"
            required="required"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleNumberChange}
          />

          <StyledButton>Add transaction</StyledButton>
        </form>
      </StyledContainer>
    </>
  );
};

export default Transaction;

const StyledContainer = styled.div`
  position: relative;
  width: 90%;
`;

const StyledTitle = styled.h3`
  color: var(--secondary);
  text-align: left;
`;

const StyledLabel = styled.p`
  margin: 1rem 0rem;
  text-align: left;
  font-size: 16px;
  color: var(--secondary);
`;

const StyledInput = styled.input`
  align-items: left;
  font-size: 16px;
  border-radius: 0.5rem;
  
  border: 0.15rem solid var(--secondary);
  background: var(--primary);
  padding: 0.5rem;
  -moz-appearance: textfield;
  font-family: "Courgette";
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledButton = styled.button`
  padding: 2rem 0.2rem;
  border-radius: 1rem;
  font-size: 12px;
  color: var(--black);
  background: var(--primary);
  border: 0.15rem solid var(--secondary);
  position: absolute;
  margin: -4rem 1rem;
  font-family: "Courgette";
`;
