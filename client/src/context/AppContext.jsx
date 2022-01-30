import { createContext, useReducer, useEffect } from "react";

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
  expenses: [],
};

const AppContext = createContext();
export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("state");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

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
