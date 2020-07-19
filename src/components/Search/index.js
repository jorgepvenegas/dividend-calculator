// @flow

import React, { useState } from "react";
import ReactDOM from "react-dom";
import SelectedStocks from "../SelectedStocks";

const Search = () => {
  const [term, setTerm] = useState("");
  const [stocks, setStocks] = useState(["NFLX", "FB", "SNE", "PINS", "SQ"]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // add value
      stocks.push(term);
      setStocks(stocks);
      setTerm("");
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
