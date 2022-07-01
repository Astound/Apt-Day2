import React from 'react'
import StuMain from './Comp/StuMain'
import StuSidebar from './Comp/StuSidebar'

function Student() {
  return (
    <div>
      <div className='layout'>
        <div className='sidebar'>
            <StuSidebar/>
        </div>

        <div className='mid'>
            <StuMain/>
        </div>

    </div>
    </div>
  )
}

export default Student
