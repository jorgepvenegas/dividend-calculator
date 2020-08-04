// @flow

import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../context/App";
import { getDividend, getQuote } from "../../api";

const Search = () => {
  const [term, setTerm] = useState("");
  const { stocks, setStocks } = useContext(AppContext);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Promise.all([getDividend(term), getQuote(term)]).then((responses) => {
        const [dividend, quote] = responses;
        if (dividend && quote) {
          const { dividendYield, companyName } = dividend;
          const { symbol, close: sharePrice } = quote;

          const newStock = {
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

          // console.log(`Added ${term}.`);

          setStocks([...stocks, newStock]);
          setTerm("");
        } else {
          // console.log(`Error adding ${term}.`);
        }
      });
    } else {
      setTerm(e.target.value);
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
