import React from 'react'
import StuMain from './Comp/StuMain'
import StuSidebar from './Comp/StuSidebar'

function Student() {
  return (
    <div className=' h-screen'>
      {/* <div className='grid grid-cols-1  md:grid-cols-3'>
          <div className='hidden static md:block'> 
              <StuSidebar/>
          </div>
          <div className=' col-span-2'>
              <StuMain/>
          </div>
      </div> */}
       <div className='grid grid-cols-1 gap-4 md:grid-cols-4 h-full '>
        <div className='  overflow-auto sidebar hidden md:block  bg-slate-500'>
                sidebar
        </div>

        <div className=' grid grid-rows-8 gap-y-4 col-span-3'>
                <div className=' bg-red-500'>
                    Welcome
                </div>

                <div className=' bg-blue-200'>
                <div className='  flex space-x-2'>
                      <div className='bg-yellow-100 basis-2/3'>
                        Courses
                      </div>

                      <div className='bg-yellow-100 basis-1/3'>
                        Transactions
                      </div>

                    </div>
                </div>
                <div className=' bg-green-300 row-span-3'>
                  <div className=' flex-row sm:flex-col'>
                      <div className='bg-indigo-100 basis-2/3'>
                        Courses
                      </div>

                      <div className='bg-yellow-100 basis-1/3'>
                        Transactions
                      </div>

                    </div>
                </div>
                <div className='  row-span-3'>
                  <div className='  flex space-x-2'>
                    <div className='bg-yellow-100 basis-2/3'>
                      Courses
                    </div>

                    <div className='bg-yellow-100 basis-1/3'>
                      Transactions
                    </div>

                  </div>
                    
                </div>
        </div>
      </div>
    </div>
  )
}

export default Student
