import React from 'react'
import InsCharts from './InsCharts'
import InsCourses from './InsCourses'
import InsWel from './InsWel'

function InsMain() {
  return (
    <div className=' inslayout p-6'>
      <div className='welcome'>
          <InsWel/>
      </div>
      <div className='course'>
          <InsCourses/>
      </div>
      <div className='chart'>
          <InsCharts/>
      </div>
    </div>
  )
}

export default InsMain
