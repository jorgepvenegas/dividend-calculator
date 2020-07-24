// @flow

import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import AppContext from "../../context/App";
import { config } from "../../../config";

const { TOKEN, BASE_URL } = config;

const getDividend = async (ticker) => {
  try {
    const response = await fetch(
      `${BASE_URL}/stock/${ticker}/stats?token=${TOKEN}`
    );
    const { dividendYield, companyName } = await response.json();
    return { dividendYield, companyName };
  } catch (err) {
    console.error(err);
  }
};

const getQuote = async (ticker) => {
  try {
    const response = await fetch(
      `${BASE_URL}/stock/${ticker}/previous?token=${TOKEN}`
    );
    const { symbol, close } = await response.json();
    return { symbol, close };
  } catch (err) {
    console.error(err);
  }
};

const Search = () => {
  const [term, setTerm] = useState("");
  const { stocks, setStocks } = useContext(AppContext);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Promise.all([getDividend(term), getQuote(term)]).then((responses) => {
        const [dividend, quote] = responses;
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

        setStocks([...stocks, newStock]);
        setTerm("");
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
