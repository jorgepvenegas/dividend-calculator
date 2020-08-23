import React, { useContext } from "react";
import AppContext from "../../context/App";

const Total:React.FC = () => {
  const { state: {stocks, amounts} } = useContext(AppContext);
  let totalOwned = 0;
  let totalDividends = 0;

  stocks.forEach( s => {
    totalOwned += s.totalOwned;
    totalDividends += s.totalDividends;
  })

  return (
    <tr id="total">
      <td colSpan={6}>$ {totalOwned.toFixed(2)}</td>
      <td>$ {totalDividends.toFixed(2)}</td>
    </tr>
  );
};

export default Total;
