import React, { useContext } from "react";
import Stock from "../Stock";
import AppContext, {IStock} from "../../context/App";

const SelectedStocks:React.FC = () => {
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
        {stocks.map((s: IStock, i: number) => (
          <Stock key={i} {...s} />
        ))}
      </tbody>
    </table>
  );
};

export default SelectedStocks;
