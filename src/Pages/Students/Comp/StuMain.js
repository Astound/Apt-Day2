import React from 'react'
import StuCourses from './StuCourses'
import StuDis from './StuDis'
import Stutnt from './Stutnt'
import StuWel from './StuWel'

function StuMain() {
  return (
    <div className='grid grid-rows-4 p-4 font-sans'>
      <div>
           <StuWel/>
      </div>
      <div >
      <StuDis/>
      </div>

      <div>
       <StuCourses/>
      </div>

      <div>
        <Stutnt/>
      </div>
    </div>
  )
}

export default StuMain
