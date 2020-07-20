// @flow

import React, { useState } from "react";
import ReactDOM from "react-dom";
import SelectedStocks from "../SelectedStocks";
import { config } from "../../../config";

const { TOKEN, BASE_URL } = config;

const Search = () => {
  const [term, setTerm] = useState("");
  const [stocks, setStocks] = useState([]);

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Promise.all([getDividend(term), getQuote(term)]).then((responses) => {
        let [
          { dividendYield, companyName },
          { symbol, close: price },
        ] = responses;

        dividendYield = dividendYield ? (dividendYield * 100).toFixed(2) : 0.0;
        stocks.push({
          symbol,
          price,
          dividendYield,
          companyName,
        });
        setStocks(stocks);
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
      <SelectedStocks stocks={stocks} />
    </div>
  );
};

export default Search;
