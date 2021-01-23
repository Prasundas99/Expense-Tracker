import React, { useContext } from 'react';
import { GlobalContext } from '../contex/GlobalState';

 const Balance = () => {
  const { transaction } = useContext(GlobalContext);

  console.log(transaction)

  const amounts = transaction.map( transaction => transaction.amounts);
  
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  

  return (
    <>
      <h4>Your Balance</h4>
    <h1>{total}</h1>
    </>
  )
}

export default Balance;