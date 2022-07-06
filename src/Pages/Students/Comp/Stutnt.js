import React from 'react'
import StuTaskList from './StuTasks/StuTaskList'
function Stutnt() {
  return (
    <div>
      <div className='flex font-sans flex-col space-y-4'>
            <div className=' bg-white p-4 rounded-lg'>
                <h1 className=' font-semibold text-2xl mb-3 ml-2'> Upcoming Task</h1>
                <div>
                <ul className='ml-2'>
                    {/* <li className=' border-l-4 pl-2 mb-4 border-blue-600'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li>
                    <li className=' border-l-4 pl-2 mb-4 border-blue-600'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li>
                    <li className=' border-l-4 pl-2 mb-4 border-blue-600'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li> */}
                    <StuTaskList/>
                </ul>
                <div className=' text-blue-600 text-right cursor-pointer'>
                    View all tasks
                </div>
            </div>
            </div>

            <div className=' bg-white p-4 rounded-lg'>
                <h1 className=' font-semibold text-xl mb-3'> Your transactions</h1>
                <div>
                    <p className=' text-xs text-gray-400'> Recent</p>
                <ul className='mt-2'>
                    <li className=' flex justify-between pl-2 mb-4'>
                        <div className='flex'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F4F7FE"/>
                            <path d="M27.92 11.01C27.72 10.42 27.16 10 26.5 10H15.5C14.84 10 14.29 10.42 14.08 11.01L12 17V25C12 25.55 12.45 26 13 26H14C14.55 26 15 25.55 15 25V24H27V25C27 25.55 27.45 26 28 26H29C29.55 26 30 25.55 30 25V17L27.92 11.01ZM15.85 12H26.14L27.22 15.11H14.77L15.85 12ZM28 22H14V17H28V22Z" fill="#05CD99"/>
                            <path d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z" fill="#05CD99"/>
                            <path d="M25.5 21C26.3284 21 27 20.3284 27 19.5C27 18.6716 26.3284 18 25.5 18C24.6716 18 24 18.6716 24 19.5C24 20.3284 24.6716 21 25.5 21Z" fill="#05CD99"/>
                            <path d="M16 29H20V27L26 30H22V32L16 29Z" fill="#05CD99"/>
                            </svg>

                            <div className='ml-1'>
                                    <h2 className=' font-semibold text-base'>Transport</h2>
                                <p className=' text-gray-400 text-xs'> Today, 02:00 PM</p>
                            </div>
                        </div>
                        <div>
                        -₹154.50
                        </div>
                    </li>
                    <li className=' flex justify-between pl-2 mb-4'>
                        <div className='flex'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F4F7FE"/>
                            <path d="M27.92 11.01C27.72 10.42 27.16 10 26.5 10H15.5C14.84 10 14.29 10.42 14.08 11.01L12 17V25C12 25.55 12.45 26 13 26H14C14.55 26 15 25.55 15 25V24H27V25C27 25.55 27.45 26 28 26H29C29.55 26 30 25.55 30 25V17L27.92 11.01ZM15.85 12H26.14L27.22 15.11H14.77L15.85 12ZM28 22H14V17H28V22Z" fill="#05CD99"/>
                            <path d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z" fill="#05CD99"/>
                            <path d="M25.5 21C26.3284 21 27 20.3284 27 19.5C27 18.6716 26.3284 18 25.5 18C24.6716 18 24 18.6716 24 19.5C24 20.3284 24.6716 21 25.5 21Z" fill="#05CD99"/>
                            <path d="M16 29H20V27L26 30H22V32L16 29Z" fill="#05CD99"/>
                            </svg>

                            <div className='ml-1'>
                                    <h2 className=' font-semibold text-base'>Transport</h2>
                                <p className=' text-gray-400 text-xs'> Today, 02:00 PM</p>
                            </div>
                        </div>
                        <div>
                        -₹154.50
                        </div>
                    </li>
                    <li className=' flex justify-between pl-2 mb-4'>
                        <div className='flex'>
                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="21" fill="#F4F7FE"/>
                            <path d="M27.92 11.01C27.72 10.42 27.16 10 26.5 10H15.5C14.84 10 14.29 10.42 14.08 11.01L12 17V25C12 25.55 12.45 26 13 26H14C14.55 26 15 25.55 15 25V24H27V25C27 25.55 27.45 26 28 26H29C29.55 26 30 25.55 30 25V17L27.92 11.01ZM15.85 12H26.14L27.22 15.11H14.77L15.85 12ZM28 22H14V17H28V22Z" fill="#05CD99"/>
                            <path d="M16.5 21C17.3284 21 18 20.3284 18 19.5C18 18.6716 17.3284 18 16.5 18C15.6716 18 15 18.6716 15 19.5C15 20.3284 15.6716 21 16.5 21Z" fill="#05CD99"/>
                            <path d="M25.5 21C26.3284 21 27 20.3284 27 19.5C27 18.6716 26.3284 18 25.5 18C24.6716 18 24 18.6716 24 19.5C24 20.3284 24.6716 21 25.5 21Z" fill="#05CD99"/>
                            <path d="M16 29H20V27L26 30H22V32L16 29Z" fill="#05CD99"/>
                            </svg>

                            <div className='ml-1'>
                                    <h2 className=' font-semibold text-base'>Transport</h2>
                                <p className=' text-gray-400 text-xs'> Today, 02:00 PM</p>
                            </div>
                        </div>
                        <div>
                        -₹154.50
                        </div>
                    </li>
                   
                </ul>
                <div className=' text-blue-600 text-right cursor-pointer'>
                    View all tasks
                </div>
            </div>
            </div>

            
        </div>
    </div>
  )
}

export default Stutnt
