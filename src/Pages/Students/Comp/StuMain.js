import React from 'react'
import StuCourses from './StuCourses'
import StuDis from './StuDis'
import Stutnt from './Stutnt'
import StuWel from './StuWel'

function StuMain() {
  return (
    <div className='mainlayout p-4 font-sans'>
      <div className='wel'>
           <StuWel/>
      </div>
      <div className='discuss'>
      <StuDis/>
      </div>

      <div className='course'>
       <StuCourses/>
      </div>

      <div className='tnt '>
        <Stutnt/>
      </div>
    </div>
  )
}

export default StuMain
