import React,{useContext} from "react";
import {GlobalContext} from './GlobalContext'
const HistoryItem = ({ transaction }) => {
  const{deleteTransaction}=useContext(GlobalContext)
  const sign = transaction.amount < 0 ? "-" : "+";
  
  const absAmount = Math.abs(transaction.amount);
  return (
<div className='main'>
<button className='remove' onClick={()=>(deleteTransaction(transaction.id))}>x</button>
    <div className="item">
      
      <span>{transaction.description}</span>
      <span>
        {sign}${absAmount}
      </span>
    </div>
    </div>
  );
};
export default HistoryItem;
