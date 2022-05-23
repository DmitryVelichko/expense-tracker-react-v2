import React from 'react';
import { GlobalContext } from '../context/GlobalState'

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        
    '.' +
    p[1]
  );
}

const Transaction = ({transaction}) => {

  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className='delete-btn'>x</button>
    </li>
  );
};

export default Transaction;
