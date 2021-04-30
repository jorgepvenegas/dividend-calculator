import React, { useContext } from "react";
import AppContext from "../../context/App";
import { Stock } from "../../../types/main";

const StockRow: React.FC<Stock> = (props) => {
  const { dispatch } = useContext(AppContext);

  const removeStock = (symbol: string) => {

    dispatch({
      type: 'REMOVE_STOCK',
      payload: { symbol }
    })
  }

  const handleSharesOwned = (sharesOwned: number) => {
    const { symbol, sharePrice, dividendYield } = props;

    dispatch({
      type: 'UPDATE_STOCK',
      payload: {
        symbol,
        sharesOwned,
        sharePrice,
        dividendYield
      }
    })
  }

  return (
    <tr>
      <td>
        <span className="float-left">{props.symbol}</span>
        <button onClick={() => removeStock(props.symbol)} className="float-right rounded bg-gray-600 px-2 text-bold hover:bg-gray-700 text-white">x</button>
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
          onChange={(e: React.FormEvent<HTMLInputElement>) => handleSharesOwned(parseInt(e.currentTarget.value))}
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
