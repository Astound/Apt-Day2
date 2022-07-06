import React from 'react'
import { useState , useEffect } from 'react';
import { db } from '../../../../firebase-config';
import {collection ,getDocs} from 'firebase/firestore';
import StuTaskItem from './StuTaskItem';
function StuTaskList() {
    const [tasks,settasks]= useState([]);
  const taskCollectionref= collection(db, "tasks");

  useEffect(()=>{
    const gettasks = async()=>{
        const info = await getDocs(taskCollectionref);
        settasks(info.docs.map((doc)=> (
           {...doc.data(), id : doc.id}) ));
    }
    gettasks();
  });
  return (
    <div>
      {tasks.map((task)=>{
        return(
            <StuTaskItem taskname = {task.taskname} timing={task.timing}/>
        );
      })}
    </div>
  )
}

export default StuTaskList
