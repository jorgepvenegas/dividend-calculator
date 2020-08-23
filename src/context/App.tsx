import React from "react";

export interface IStock {
  symbol: string,
  sharePrice: number,
  dividendYield: number,
  companyName: string,
  sharesOwned: number,
  totalDividends: number,
  totalOwned: number
}

interface IAction {
  type: string,
  payload: any
}

interface IState {
  stocks: IStock[],
  amounts: {},
}

export const initialState: IState = {
  stocks: [],
  amounts: {}
}

export const reducer = (state: IState, action: IAction): IState => {
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

const AppContext = React.createContext<IState | any>(initialState);
export default AppContext;
