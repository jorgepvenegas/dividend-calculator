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
        {props.stocks.map((s, i) => (
          <Stock key={i} {...s} />
        ))}
      </tbody>
    </table>
  );
};

export default SelectedStocks;
