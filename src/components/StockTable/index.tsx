import React, { useContext } from "react";
import StockRow from "../StockRow";
import {Stock} from "../../../types/main";
import AppContext from "../../context/App"
import Total from "../Total";

const StockTable:React.FC = () => {
  const { state: {stocks} } = useContext(AppContext);
  return (
    <table id="selected-stocks" className="container">
      <thead>
        <tr>
          <th className="w-1/7">Symbol</th>
          <th className="w-1/7">Company</th>
          <th className="w-1/7">Dividend yield</th>
          <th className="w-1/7">Price</th>
          <th className="w-1/7">Shares owned</th>
          <th className="w-1/7">Total owned</th>
          <th className="w-1/7">Yearly dividend</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((s: Stock, i: number) => (
          <StockRow key={i} {...s} />
        ))}
        <Total />
      </tbody>
    </table>
  );
};

export default StockTable;
