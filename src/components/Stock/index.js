import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

type StockProps = {
  name: string,
  dividendYield: number,
  price: number,
};

const Stock = (props: StockProps) => {
  const [sharesOwned, setSharesOwned] = useState(0);
  const [totalDividends, setTotalDividends] = useState(0);
  const [totalOwned, setTotalOwned] = useState(0);
  const [sharePrice, setSharePrice] = useState(props.price);
  const [dividendYield, setDividendYield] = useState(props.dividendYield);

  // Calculate total $ based on shares owned
  useEffect(() => {
    setTotalOwned((sharesOwned * sharePrice).toFixed(2));
  }, [sharesOwned, sharePrice]);

  // Calculate total dividends based on total $
  useEffect(() => {
    setTotalDividends(((totalOwned * dividendYield) / 100).toFixed(2));
  }, [totalOwned]);

  return (
    <tr>
      <td>
        {/* name */}
        {props.symbol}
        {/* <button>x</button> */}
      </td>
      <td>
        {/* name */}
        {props.companyName}
        {/* <button>x</button> */}
      </td>
      <td className="font-mono text-right">
        {/* Dividend yield */}
        {dividendYield} %
      </td>
      <td className="font-mono text-right">
        {/* Share price */}${sharePrice}
      </td>
      <td className="font-mono text-right">
        {/* Shares owned */}
        <input
          type="number"
          className="shares-number"
          value={sharesOwned}
          onChange={(e) => setSharesOwned(e.target.value)}
        />
      </td>
      <td className="font-mono text-right">
        {/* Total $ owned  */}${totalOwned}
      </td>
      <td className="font-mono text-right">
        {/* Yearly dividends */}${totalDividends}
      </td>
    </tr>
  );
};

export default Stock;
