import React,{useState,useContext} from "react";
import {GlobalContext} from './GlobalContext'

const AddForm = () => {
  let [amount,setAmount]=useState('');
  let [description,setDesc]=useState('');
  const {addTransaction}=useContext(GlobalContext)

  const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
          id: parseFloat(Math.random()*1000),
          amount:+amount,
          description
        }
        addTransaction(newTransaction)
        setDesc('')
        setAmount('')
  }
  return (
    <div className="addForm">
      <h2>Add New Transaction</h2>
      <hr></hr>
    
      <form onSubmit={onSubmit}>
          <label>Description</label><br></br>
          <input type='text' value={description} onChange={e=>setDesc(e.target.value)}></input><br></br>
          <label>Transaction Amount</label><br></br>
          <input type='number' value={amount} onChange={e=>setAmount(e.target.value)}></input><br>
          </br>
          <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
};
export default AddForm;
