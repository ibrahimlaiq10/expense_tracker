import React,{useContext} from 'react';
import {GlobalContext} from './GlobalContext'
import HistoryItem from './HistoryItem'
 
const History = ()=>{
    const {transactions} =useContext(GlobalContext)
    return(
        <div className='history'>
<h2>Transaction History</h2>
<hr></hr>
{transactions.map((transaction,index)=><HistoryItem transaction={transaction} key={index}/>)}
</div>

    )
}
export default History;