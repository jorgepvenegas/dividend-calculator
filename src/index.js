// @flow

import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import Total from "./components/Total";
import "./styles/main.css";

const App = () => (
  <div id="main" className="container">
    <h1 className="text-3xl mb-5 font-normal">Dividend Calculator</h1>
    <Search />
    {/* <Stocks /> */}
    <Total />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
