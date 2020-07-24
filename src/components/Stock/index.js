import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../context/App";
import ReactDOM from "react-dom";

type StockProps = {
  name: string,
  dividendYield: number,
  price: number,
};

const Stock = (props: StockProps) => {
  const { stocks, setStocks, amounts, setAmounts } = useContext(AppContext);
  const [sharesOwned, setSharesOwned] = useState(props.sharesOwned);
  const [totalDividends, setTotalDividends] = useState(props.totalDividends);
  const [totalOwned, setTotalOwned] = useState(props.totalOwned);

  // Calculate total $ based on shares owned
  useEffect(() => {
    const { symbol, sharePrice, dividendYield } = props;
    const totalOwned = Number((sharesOwned * sharePrice).toFixed(2));
    const totalDividends = Number(
      ((totalOwned * props.dividendYield) / 100).toFixed(2)
    );
    setTotalOwned(totalOwned);
    setTotalDividends(totalDividends);
    amounts[symbol] = {
      totalOwned,
      totalDividends,
    };
    setAmounts({ ...amounts });
  }, [sharesOwned]);

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
        {props.dividendYield} %
      </td>
      <td className="font-mono text-right">
        {/* Share price */}${props.sharePrice}
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
