// @flow

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Stock from "../Stock";

type SelectedStocksProps = {
  stocks: Array<string>,
};

const SelectedStocks = (props: SelectedStocksProps) => {
  return (
    <table id="selected-stocks" className="container">
      <thead>
        <tr>
          <th className="w-1/6">Name</th>
          <th className="w-1/6">Dividend yield</th>
          <th className="w-1/6">Price</th>
          <th className="w-1/6">Shares owned</th>
          <th className="w-1/6">Total owned</th>
          <th className="w-1/6">Yearly dividend</th>
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
