import React, { useContext } from "react";
import AppContext from "../../context/App";

const Total = () => {
  const { state: {amounts} } = useContext(AppContext);
  let totalOwned = 0;
  let totalDividends = 0;

  Object.keys(amounts).map((a) => {
    totalOwned = totalOwned + amounts[a].totalOwned;
    totalDividends = totalDividends + amounts[a].totalDividends;
  });

  return (
    <tr id="total">
      <td colSpan={6}>$ {totalOwned.toFixed(2)}</td>
      <td>$ {totalDividends.toFixed(2)}</td>
    </tr>
  );
};

export default Total;
