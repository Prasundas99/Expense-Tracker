import React, {useContext} from 'react';
import { GlobalContext } from '../contex/GlobalState';



const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amounts < 0 ? '-' : '+';

 
  return (
    <li className={transaction.amounts < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{Math.abs(transaction.amounts)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction;