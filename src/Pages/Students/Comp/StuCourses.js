import React from 'react'
import StuCourseList from './StuCourses/StuCourseList'

function StuCourses() {
  return (
    <div>
      <div>
       <div className='  flex flex-col'>
            
            <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md: max-w-md hover:bg-gray-100 ">
                <div class="flex flex-col justify-between p-8 leading-normal">
                    <h2 class="mb-2  text-4xl font-semibold tracking-tight text-gray-900 ">Learn Python within 30 days</h2>
                    <p class="mb-3 font-normal text-gray-700 ">Time to become advance than others with this course </p>
                <div className=' flex justify-between mt-4'>
                    <button className=' bg-blue-600 p-3 text-white rounded-full text-base'> Join trail classes </button>
                    <button className='mt-2'> Skip</button>
                </div>
                </div>
                <img class="object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
            </div>


            <div className='mt-4 font-sans bg-white p-4 rounded-lg'>
                    <div className='flex justify-between mb-4'>
                        <div className=' font-semibold text-2xl'> My Courses</div>
                        <div className='flex space-x-4'>
                            <p className=' text-blue-600'>All</p>
                            <p>Ongoing</p>
                            <p>Complete</p>
                        </div>
                    </div>
                    <StuCourseList/>
                <div className=' text-blue-600 text-right mt-4'>
                    View all
                </div>
                </div>
            


        </div>
    </div>
    </div>
  )
}

export default StuCourses
