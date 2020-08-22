import React, { useState, useContext } from "react";
import AppContext, { IStock } from "../../context/App";
import { getDividend, getQuote } from "../../api";

const Search:React.FC = () => {
  const [term, setTerm] = useState("");
  const { dispatch } = useContext(AppContext);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      
      Promise.all([getDividend(term), getQuote(term)]).then((responses) => {
        const [dividend, quote] = responses;
        if (dividend && quote) {
          const { dividendYield, companyName } = dividend;
          const { symbol, close: sharePrice } = quote;

          const newStock: IStock = {
            symbol,
            sharePrice,
            dividendYield: dividendYield
              ? Number((dividendYield * 100).toFixed(2))
              : 0.0,
            companyName,
            sharesOwned: 0,
            totalDividends: 0,
            totalOwned: 0,
          };

          dispatch({
            type: 'SET_STOCK',
            payload: newStock
          })
          setTerm("");
        } else {
          console.log(`Error adding ${term}.`);
        }
      });
    } else {
      setTerm(term);
    }
  };
  return (
    <div>
      <div id="search" className="flex flex-wrap">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="TSLA"
        />
      </div>
    </div>
  );
};

export default Search;
