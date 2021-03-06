import React, { useState, useContext } from "react";
import AppContext from "../../context/App";
import { getQuote } from "../../api";
import { Stock } from "../../../types/main";

const Search:React.FC = () => {
  const [term, setTerm] = useState("");
  const { state: {stocks},dispatch } = useContext(AppContext);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {

      // Check if ticker is already present
      const isPresent = !!stocks.find((s: { symbol: string; }) => s.symbol.toLowerCase() === term.toLocaleLowerCase());

      if(isPresent) {
        setTerm("");
        return;
      };
      
      getQuote(term).then(response => {
        // if (dividend && quote) {
          const { dividendYield, companyName, symbol, close: sharePrice } : any = response;

          const newStock: Stock = {
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
        // } else {
          // }
        })
        .catch(err => {
          console.error(`Error adding ${term}.`, err);
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
