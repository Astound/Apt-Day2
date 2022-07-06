import React from 'react'

function StuTaskItem(props) {
  return (
    <div>
      <li className=' border-l-4 pl-2 mb-4 border-blue-600'>
            <h2 className=' font-semibold text-lg'>{props.taskname}</h2>
            <p className=' text-gray-300 text-xs'> {props.timing}</p>
    </li>
    </div>
  )
}

export default StuTaskItem
