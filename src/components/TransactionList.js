import {GlobalContext} from '../contex/GlobalState';
import {useContext} from 'react';

import Transaction from './transaction';

const TransactionList = () => {
  const {transaction} = useContext(GlobalContext);
    return (
        <div>
          <h3>History</h3>
            <ul id="list" className="list">
              {transaction.map(transaction => (
                 <Transaction key={transaction.id} transaction={transaction}/>
              ))}
 
            </ul>
        </div>
    )
}

export default TransactionList
