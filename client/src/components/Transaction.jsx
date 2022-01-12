import React, { useState } from "react";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

const Transaction = () => {
  const { dispatch } = useContext(AppContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      text,
      amount: parseInt(amount),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3> Add new transaction </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
