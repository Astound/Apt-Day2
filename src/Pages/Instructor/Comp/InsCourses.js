import React from "react";

function InsCourses() {
  return (
    <div>
      <div>
        <div className="  flex justify-between ">
          <div className="mt-4 font-sans bg-white p-4 rounded-lg">
            <div className=" font-semibold mb-4 text-2xl"> Top Courses</div>

            <ul className=" space-y-4">
              <li className="flex my-2 justify-between">
                <div className="flex">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24" fill="#F6F8FD" />
                    <path
                      d="M16 18H32V20H16V18ZM18 14H30V16H18V14ZM32 22H16C14.9 22 14 22.9 14 24V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V24C34 22.9 33.1 22 32 22ZM32 32H16V24H32V32ZM22 24.73V31.26L28 28L22 24.73Z"
                      fill="#FFB547"
                    />
                  </svg>

                  <div className="flex ml-2 flex-col">
                    <h4 className="font-sans text-base font-semibold">
                      History of India
                    </h4>
                    <p className="text-xs text-slate-300">By Random Author</p>
                  </div>
                </div>

                <div className=" ml-72">
                  <p className=" text-emerald-400 text-lg">₹15324.50</p>
                  <p className=" text-xs text-gray-400">Subscribers</p>
                </div>
              </li>
              <li className="flex my-2 justify-between">
                <div className="flex">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24" fill="#F6F8FD" />
                    <path
                      d="M16 18H32V20H16V18ZM18 14H30V16H18V14ZM32 22H16C14.9 22 14 22.9 14 24V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V24C34 22.9 33.1 22 32 22ZM32 32H16V24H32V32ZM22 24.73V31.26L28 28L22 24.73Z"
                      fill="#FFB547"
                    />
                  </svg>

                  <div className="flex ml-2 flex-col">
                    <h4 className="font-sans text-base font-semibold">
                      History of India
                    </h4>
                    <p className="text-xs text-slate-300">By Random Author</p>
                  </div>
                </div>

                <div className=" ml-56">
                  <p className=" text-emerald-400 text-lg">₹15324.50</p>
                  <p className=" text-xs text-gray-400">Subscribers</p>
                </div>
              </li>
              <li className="flex my-2 justify-between">
                <div className="flex">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="24" cy="24" r="24" fill="#F6F8FD" />
                    <path
                      d="M16 18H32V20H16V18ZM18 14H30V16H18V14ZM32 22H16C14.9 22 14 22.9 14 24V32C14 33.1 14.9 34 16 34H32C33.1 34 34 33.1 34 32V24C34 22.9 33.1 22 32 22ZM32 32H16V24H32V32ZM22 24.73V31.26L28 28L22 24.73Z"
                      fill="#FFB547"
                    />
                  </svg>

                  <div className="flex ml-2 flex-col">
                    <h4 className="font-sans text-base font-semibold">
                      History of India
                    </h4>
                    <p className="text-xs text-slate-300">By Random Author</p>
                  </div>
                </div>

                <div className=" ml-48">
                  <p className=" text-emerald-400 text-lg">₹15324.50</p>
                  <p className=" text-xs text-gray-400">Subscribers</p>
                </div>
              </li>
            </ul>
            <div className=" text-emerald-400 text-right mt-4">View all</div>
          </div>


          <div className=' bg-white p-2 mt-3 rounded-lg'>
                <h1 className=' font-sans font-bold text-3xl mb-6 ml-2'> Upcoming Task</h1>
                <div>
                <ul className='ml-2  mr-96'>
                    <li className=' border-l-4 pl-2 mb-4 border-emerald-400'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li>
                    <li className=' border-l-4 pl-2 mb-4 border-emerald-400'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li>
                    <li className=' border-l-4 pl-2 mb-4 border-emerald-400'>
                        <h2 className=' font-semibold text-lg'> Environment Discuss</h2>
                        <p className=' text-gray-300 text-xs'> 01:00 PM - 02:00 PM</p>
                    </li>
                </ul>
                <div className=" text-emerald-400 text-right mt-4">View all</div>
            </div>
                
            </div>
          
        </div>

        
      </div>
    </div>
  );
}

export default InsCourses;
