import React,{useContext} from 'react';
import {GlobalContext} from './GlobalContext'
const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amount=transactions.map(transaction=>transaction.amount);
  const balance=amount.reduce((total,item)=>total+=item,0)
  const income=amount.filter(item=>item>0).reduce((acc,item)=>acc+=item,0).toFixed(2)
  const expense=(amount.filter(item=>item<0).reduce((acc,item)=>acc+=item,0)*1).toFixed(2)


  return (
    <div className="balance">
      <h3>CURRENT BALANCE</h3>
  <h1>${balance}</h1>
      <div className="box">
        <div className="income">
          <h4>INCOME</h4>
          <p>{income===''?0:income}</p>
        </div>
        <div className="line"></div>
        <div className="expense">
          <h4>EXPENSE</h4>
          <p>{expense}</p>
        </div>
      </div>
    </div>
  );
};
export default Balance;
