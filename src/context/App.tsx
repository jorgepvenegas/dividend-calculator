import React from "react";
import { State, Action } from "../../types/main";

export const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'SET_STOCK':
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      }
    case 'UPDATE_STOCKS':
      return {
        ...state,
        stocks: [...action.payload]
      }
    default:
      return state
  }
}

export const initialState: State = {
  stocks: [],
  amounts: {}
}

const AppContext = React.createContext<State | any>(initialState);
export default AppContext;
