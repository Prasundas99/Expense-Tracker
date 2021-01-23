import React, { useContext } from 'react';
import { GlobalContext } from '../contex/GlobalState';

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    ' ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

 const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map( transaction => transaction.amounts);
  

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}

export default Balance;