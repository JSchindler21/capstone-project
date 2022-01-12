
import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';


  const AppReducer = (state, action) => {
    switch (action.type){
      case 'SET_BUDGET':
        return{
          ...state, 
          budget: action.payload,
        }
        case 'SET_TRIP':
          return{
              ...state, 
              trip: action.payload,
            
          }
        default: 
        return state
    }
  }

const initialState = {
    budget: '',
    trip: "",
    expenses: [
      { id: uuidv4(), name: 'Hotel', cost: 500 },
      { id: uuidv4(), name: 'Flug', cost: 890 },
      { id: uuidv4(), name: 'Safari Tour', cost: 200 },
      
    ],
  };

  const AppContext = createContext()


  export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
  
    return(
      <AppContext.Provider 
      value= {{
        expenses: state.expenses,
        budget: state.budget,
        trip: state.trip,
        dispatch,
      }}>
  
        {props.children}
      </AppContext.Provider>
    )
  }


  export default AppContext;