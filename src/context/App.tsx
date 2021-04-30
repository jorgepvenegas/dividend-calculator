import React from "react";
import { State, Action } from "../../types/main";

const calculateDividends = (totalOwned: number, dividendYield: number) => {
  return Number((totalOwned * dividendYield / 100).toFixed(2))
}

const calculateTotal = (units: number, price: number) => {
  return Number((units * price).toFixed(2))
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_STOCK':
      return {
        ...state,
        stocks: [...state.stocks, action.payload]
      }

    case 'UPDATE_STOCK':
      const {
        symbol,
        sharesOwned,
        sharePrice,
        dividendYield
      } = action.payload;

      const totalOwned = calculateTotal(sharesOwned, sharePrice);
      const totalDividends = calculateDividends(totalOwned, dividendYield)

      const stocks = state.stocks.map(s => {
        if (s.symbol === symbol) {
          s.totalDividends = totalDividends;
          s.totalOwned = totalOwned;
          s.sharesOwned = sharesOwned;
        }
        return s
      })
      return {
        ...state,
        stocks
      }
    case 'REMOVE_STOCK':
      const updatedStocks = state.stocks.filter((s: { symbol: string; }) => s.symbol !== action.payload.symbol);
      return {
        ...state,
        stocks: updatedStocks
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
