import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../context/App";
import { Stock } from "../../../types/main";

const StockRow:React.FC<Stock> = (props) => {
  const { state: {stocks}, dispatch } = useContext(AppContext);
  const [sharesOwned, setSharesOwned] = useState(0);

  const removeStock = (ticker: string) => {
    const updatedStocks = stocks.filter( (s: { symbol: string; }) => s.symbol !== ticker);
    dispatch({
      type: 'UPDATE_STOCKS',
      payload: updatedStocks
    })
  }

  // Calculate total $ based on shares owned
  useEffect(() => {
    const { symbol, sharePrice, dividendYield } = props;
    const totalOwned = Number((sharesOwned * sharePrice).toFixed(2));
    const totalDividends = Number(
      ((totalOwned * dividendYield) / 100).toFixed(2)
    );

    const updatedStocks = stocks.map( (s: { symbol: string; }) => {
      if(s.symbol === symbol) {
        return {
          ...s,
          totalOwned,
          sharesOwned,
          totalDividends
        }
      }
      return s;
    })

    dispatch({
      type: 'UPDATE_STOCKS',
      payload: updatedStocks
    })

  }, [sharesOwned]);

  return (
    <tr>
      <td>
        <span className="float-left">{props.symbol}</span>
        <button onClick={ () => removeStock(props.symbol)} className="float-right rounded bg-gray-600 px-2 text-bold hover:bg-gray-700 text-white">x</button>
      </td>
      <td>
        {props.companyName}
      </td>
      <td className="font-mono text-right">
        {props.dividendYield} %
      </td>
      <td className="font-mono text-right">
        ${props.sharePrice}
      </td>
      <td className="font-mono text-right">
        <input
          type="number"
          className="shares-number"
          min={0}
          value={props.sharesOwned}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setSharesOwned(parseInt(e.currentTarget.value))}
        />
      </td>
      <td className="font-mono text-right">
        ${props.totalOwned}
      </td>
      <td className="font-mono text-right">
        ${props.totalDividends}
      </td>
    </tr>
  );
};

export default React.memo(StockRow);
