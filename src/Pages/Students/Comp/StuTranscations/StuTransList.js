import React from 'react'
import { db } from '../../../../firebase-config'
import {collection ,getDocs} from 'firebase/firestore'; 
import { useState , useEffect } from 'react';
import StuTransItem from './StuTransItem';

function StuTransList() {
  const [transactions,settransactions]= useState([]);
  const transactionCollectionref= collection(db, "transactions");

  useEffect(()=>{
    const gettransactions = async()=>{
        const info = await getDocs(transactionCollectionref);
        settransactions(info.docs.map((doc)=> (
           {...doc.data(), id : doc.id}) ));
    }
    gettransactions();
  });
  return (
    <div>
      {transactions.map((transaction)=>{
        return (
          <div>
            <StuTransItem price={transaction.price} timestamp={transaction.timestamp} event={transaction.event}/>
            </div>
        );
      })}
    </div>
  )
}

export default StuTransList
