import React from 'react';
import { useState , useEffect } from 'react';
import {db} from '../../../../firebase-config';
import {collection ,getDocs} from 'firebase/firestore'; 
import StuCourseItem from './StuCourseItem';
function StuCourseList() {
  const [courses,setCourses]= useState([]);
  const courseCollectionref= collection(db, "courses");

  useEffect(()=>{
    const getCourses = async()=>{
        const info = await getDocs(courseCollectionref);
        setCourses(info.docs.map((doc)=> (
           {...doc.data(), id : doc.id}) ));
    }
    getCourses();
  });
  return (
    <div>
      <ul>
        {courses.map((course)=>{
            return(
                <div>
                    <StuCourseItem title={course.title} author={course.author} rating={course.rating}/>
                </div>
            );
        })}
      </ul>
    </div>
  )
}

export default StuCourseList
