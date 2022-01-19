import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_TRIP":
      return {
        ...state,
        trip: action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
      case "DELETE_EXPENSE":
        return {
          ...state,
          expenses: state.expenses.filter(
            (expense) => expense.id !== action.payload
          ),
        };
    
    default:
      return state;
  }
};

const initialState = {
  budget: "",
  trip: "",
  expenses: [
    { id: uuidv4(), nextTrip: "Hotel", amount: 500 },
    { id: uuidv4(), nextTrip: "Flug", amount: 890 },
    { id: uuidv4(), nextTrip: "Safari Tour", amount: 200 },
  ],
};

const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        trip: state.trip,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
