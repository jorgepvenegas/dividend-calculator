// @flow

import React from "react";
import ReactDOM from "react-dom";

import Search from "./components/Search";
import Total from "./components/Total";

const App = () => (
  <>
    <Search />
    {/* <Stocks />  */}
    <Total />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
