import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../context/App";
import { IStock } from "../../context/App";

const Stock = (props: IStock) => {
  const { state: {amounts}, dispatch } = useContext(AppContext);
  const [sharesOwned, setSharesOwned] = useState(props.sharesOwned);
  const [totalDividends, setTotalDividends] = useState(props.totalDividends);
  const [totalOwned, setTotalOwned] = useState(props.totalOwned);

  // Calculate total $ based on shares owned
  useEffect(() => {
    const { symbol, sharePrice, dividendYield } = props;
    const totalOwned = Number((sharesOwned * sharePrice).toFixed(2));
    const totalDividends = Number(
      ((totalOwned * dividendYield) / 100).toFixed(2)
    );
    setTotalOwned(totalOwned);
    setTotalDividends(totalDividends);

    amounts[symbol] = {
      totalOwned,
      totalDividends,
    };

    dispatch({
      type: 'SET_AMOUNT',
      payload: amounts
    })

  }, [sharesOwned]);

  return (
    <tr>
      <td>
        {props.symbol}
      </td>
      <td>
        {props.companyName}
      </td>
      <td className="font-mono text-right">
        {props.dividendYield} %
      </td>
      <td className="font-mono text-right">
        ${props.sharePrice}
      </td>
      <td className="font-mono text-right">
        <input
          type="number"
          className="shares-number"
          value={sharesOwned}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setSharesOwned(parseInt(e.currentTarget.value))}
        />
      </td>
      <td className="font-mono text-right">
        ${totalOwned}
      </td>
      <td className="font-mono text-right">
        ${totalDividends}
      </td>
    </tr>
  );
};

export default React.memo(Stock);
