import React from 'react'
import InsMain from './Comp/InsMain'
import InsSidebar from './Comp/InsSidebar'

function Student() {
  return (
    <div>
      <div className='layout'>
        <div className='sidebar'>
            <InsSidebar/>
        </div>

        <div className='mid'>
            <InsMain/>
        </div>
    </div>
    </div>
  )
}

export default Student
