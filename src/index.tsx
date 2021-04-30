import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import StockTable from "./components/StockTable";
import AppContext, { initialState, reducer } from "./context/App";
import "./styles/main.css";

const App:React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main" className="container">
      <h1 className="text-3xl mb-5 font-normal">Dividend Calculator</h1>
      <AppContext.Provider value={{ state, dispatch }}>
        <Search />
        <StockTable />
      </AppContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
