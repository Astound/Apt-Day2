import React from 'react'

function InsWel() {
  return (
    <div>
       <p className=' text-gray-400'> Hi Tarun,</p>
            <p className=' text-3xl font-sans font-semibold'> Welcome to Sova!</p>

            <div className='mt-2 flex justify-between'>
                <div className=' bg-white p-4 pr-56 rounded-lg ml-1 '>
                    <div className='flex '> 
                        <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28.7891" cy="28" r="28" fill="#F4F7FE"/>
                        <path d="M21.0732 24.3135H21.3469C22.4006 24.3135 23.2626 25.1756 23.2626 26.2293V35.8081C23.2626 36.8618 22.4006 37.7239 21.3469 37.7239H21.0732C20.0195 37.7239 19.1574 36.8618 19.1574 35.8081V26.2293C19.1574 25.1756 20.0195 24.3135 21.0732 24.3135ZM28.7363 18.5663C29.7899 18.5663 30.652 19.4283 30.652 20.482V35.8081C30.652 36.8618 29.7899 37.7239 28.7363 37.7239C27.6826 37.7239 26.8205 36.8618 26.8205 35.8081V20.482C26.8205 19.4283 27.6826 18.5663 28.7363 18.5663ZM36.3993 29.5135C37.453 29.5135 38.3151 30.3756 38.3151 31.4292V35.8081C38.3151 36.8618 37.453 37.7239 36.3993 37.7239C35.3456 37.7239 34.4836 36.8618 34.4836 35.8081V31.4292C34.4836 30.3756 35.3456 29.5135 36.3993 29.5135Z" fill="#4318FF"/>
                        </svg>

                        <div className='flex flex-col ml-2 self-center'>
                            <h1 className=' text-sm text-gray-400'> Learning time</h1>
                            <h1 className=' text-lg font-semibold'> 2h 37m</h1>
                        </div>
                    </div>
                </div>
                <div className=' bg-white p-4 pr-56 rounded-lg'>
                    <div className='flex '> 
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_123_382)"/>
                        <defs>
                        <linearGradient id="paint0_linear_123_382" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#868CFF"/>
                        <stop offset="1" stop-color="#0066FF"/>
                        </linearGradient>
                        </defs>
                        </svg>

                        <div className='flex flex-col ml-2 self-center'>
                            <h1 className=' text-sm text-gray-400'> My activities</h1>
                            <h1 className=' text-lg font-semibold'> 21 tasks</h1>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default InsWel
