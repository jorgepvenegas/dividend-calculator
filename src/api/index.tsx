import { config } from "../config";

const { BASE_URL } = config;

export const getQuote = async (ticker: string) => {
  try {
    let response = await fetch(
      `${BASE_URL}/stock/${ticker}`
    );
    
    const { dividend_yield: dividendYield, company_name: companyName, ticker: symbol, close  } = await response.json();
    return { dividendYield, companyName, symbol, close };
  } catch (err) {
    console.error(err);
  }
};