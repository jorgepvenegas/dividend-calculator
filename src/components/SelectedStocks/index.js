// @flow

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Stock from "../Stock";

type SelectedStocksProps = {
  stocks: Array<string>,
};

const SelectedStocks = (props: SelectedStocksProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Div yield (%)</th>
          <th>Price</th>
          <th>Shares owned</th>
          <th>Total owned</th>
          <th>Yearly dividend</th>
        </tr>
      </thead>
      <tbody>
        {props.stocks.map((s, i) => (
          <Stock name={s} dividendYield={0.07} price={50} />
        ))}
      </tbody>
    </table>
  );
};

export default SelectedStocks;
