import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Incomeecpense from './components/Incomeecpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './contex/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <Incomeecpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
