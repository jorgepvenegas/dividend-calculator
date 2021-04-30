export interface Stock {
  symbol: string,
  sharePrice: number,
  dividendYield: number,
  companyName: string,
  sharesOwned: number,
  totalDividends: number,
  totalOwned: number
}

export interface Action {
  type: string,
  payload: any
}

export interface State {
  stocks: Stock[],
  amounts: {},
}