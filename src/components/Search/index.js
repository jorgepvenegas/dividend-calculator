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
    <>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SelectedStocks stocks={stocks} />
    </>
  );
};

export default Search;
