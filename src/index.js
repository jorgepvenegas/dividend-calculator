// @flow

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import SelectedStocks from "./components/SelectedStocks";
import AppContext from "./context/App";

import "./styles/main.css";

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [amounts, setAmounts] = useState({});
  return (
    <div id="main" className="container">
      <h1 className="text-3xl mb-5 font-normal">Dividend Calculator</h1>
      <AppContext.Provider value={{ stocks, setStocks, amounts, setAmounts }}>
        <Search />
        <SelectedStocks />
      </AppContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
