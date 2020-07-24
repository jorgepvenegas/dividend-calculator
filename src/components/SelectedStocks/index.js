// @flow

import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Stock from "../Stock";
import AppContext from "../../context/App";
import Total from "../../components/Total";

const SelectedStocks = () => {
  const { stocks } = useContext(AppContext);
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
        {stocks.map((s, i) => (
          <Stock key={i} {...s} />
        ))}
        <Total />
      </tbody>
    </table>
  );
};

export default SelectedStocks;
