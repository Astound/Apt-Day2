import React from 'react'

function StuCourses() {
  return (
    <div>
      <div>
       <div className='  flex flex-col'>
            
            <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md: max-w-md hover:bg-gray-100 ">
                <div class="flex flex-col justify-between p-8 leading-normal">
                    <h2 class="mb-2  text-4xl font-semibold tracking-tight text-gray-900 ">Learn Python within 30 days</h2>
                    <p class="mb-3 font-normal text-gray-700 ">Time to become advance than others with this course </p>
                <div className=' flex justify-between mt-4'>
                    <button className=' bg-blue-600 p-3 text-white rounded-full text-base'> Join trail classes </button>
                    <button className='mt-2'> Skip</button>
                </div>
                </div>
                <img class="object-cover h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
            </div>


                <div className='mt-4 font-sans bg-white p-4 rounded-lg'>
                    <div className='flex justify-between mb-4'>
                        <div className=' font-semibold text-2xl'> My Courses</div>
                        <div className='flex space-x-4'>
                            <p className=' text-blue-600'>All</p>
                            <p>Ongoing</p>
                            <p>Complete</p>
                        </div>
                    </div>

                <ul className=' space-y-4' >
                    <li className='flex my-2 justify-between'>
                        <div className='flex'>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="24" fill="#F6F8FD"/>
                        </svg>
                            <div className='flex ml-2 flex-col'>
                            <h4 className='font-sans text-base font-semibold'>History of India</h4>
                            <p className='text-xs text-slate-300'>By Random Author</p>
                        </div>
                        </div>
                        
                        <div className=' self-center'>
                            <svg width="121" height="10" viewBox="0 0 121 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.28882e-05" width="121" height="9.22314" rx="4.61157" fill="#E9EDF7"/>
                            <rect width="62.3615" height="9.22315" rx="4.61158" fill="#0066FF"/>
                                </svg>

                        </div>

                        <div className='flex self-center'>
                            <svg className='mt-1' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55248 0.808126C6.85854 -0.098927 8.14146 -0.098927 8.44752 0.808126L9.46209 3.81499C9.59794 4.21762 9.97343 4.49043 10.3983 4.49521L13.5716 4.53096C14.5288 4.54174 14.9252 5.76187 14.1572 6.33324L11.611 8.22732C11.27 8.48095 11.1266 8.92236 11.2534 9.32795L12.1999 12.3569C12.4855 13.2706 11.4476 14.0247 10.6668 13.4708L8.07864 11.6345C7.73206 11.3886 7.26794 11.3886 6.92136 11.6345L4.33317 13.4708C3.55241 14.0247 2.51451 13.2706 2.80006 12.3569L3.74664 9.32795C3.87339 8.92236 3.72997 8.48095 3.38902 8.22732L0.842852 6.33324C0.0747693 5.76187 0.471212 4.54174 1.42845 4.53096L4.60166 4.49521C5.02657 4.49043 5.40206 4.21762 5.53791 3.81499L6.55248 0.808126Z" fill="#FFB547"/>
                            </svg>
                            <p className='ml-2'>4.3</p>
                        </div>

                        <div>
                            <button className='border-2 text-blue-600 border-blue-600 p-2 px-4 rounded-full'>
                                View course
                            </button>
                        </div>
                    </li>
                    <li className='flex my-2 justify-between'>
                        <div className='flex'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#F6F8FD"/>
                            </svg>
                            <div className='flex ml-2 flex-col'>
                            <h4 className='font-sans text-base font-semibold'>History of India</h4>
                            <p className='text-xs text-slate-300'>By Random Author</p>
                        </div>
                        </div>
                        
                        <div className=' self-center'>
                            <svg width="121" height="10" viewBox="0 0 121 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.28882e-05" width="121" height="9.22314" rx="4.61157" fill="#E9EDF7"/>
                            <rect width="62.3615" height="9.22315" rx="4.61158" fill="#0066FF"/>
                                </svg>

                        </div>

                        <div className='flex self-center'>
                            <svg className='mt-1' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55248 0.808126C6.85854 -0.098927 8.14146 -0.098927 8.44752 0.808126L9.46209 3.81499C9.59794 4.21762 9.97343 4.49043 10.3983 4.49521L13.5716 4.53096C14.5288 4.54174 14.9252 5.76187 14.1572 6.33324L11.611 8.22732C11.27 8.48095 11.1266 8.92236 11.2534 9.32795L12.1999 12.3569C12.4855 13.2706 11.4476 14.0247 10.6668 13.4708L8.07864 11.6345C7.73206 11.3886 7.26794 11.3886 6.92136 11.6345L4.33317 13.4708C3.55241 14.0247 2.51451 13.2706 2.80006 12.3569L3.74664 9.32795C3.87339 8.92236 3.72997 8.48095 3.38902 8.22732L0.842852 6.33324C0.0747693 5.76187 0.471212 4.54174 1.42845 4.53096L4.60166 4.49521C5.02657 4.49043 5.40206 4.21762 5.53791 3.81499L6.55248 0.808126Z" fill="#FFB547"/>
                            </svg>
                            <p className='ml-2'>4.3</p>
                        </div>

                        <div>
                            <button className='border-2 text-blue-600 border-blue-600 p-2 px-4 rounded-full'>
                                View course
                            </button>
                        </div>
                    </li>
                    <li className='flex my-2 justify-between'>
                        <div className='flex'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#F6F8FD"/>
                            </svg>
                            <div className='flex ml-2 flex-col'>
                            <h4 className='font-sans text-base font-semibold'>History of India</h4>
                            <p className='text-xs text-slate-300'>By Random Author</p>
                        </div>
                        </div>
                        
                        <div className=' self-center'>
                            <svg width="121" height="10" viewBox="0 0 121 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.28882e-05" width="121" height="9.22314" rx="4.61157" fill="#E9EDF7"/>
                            <rect width="62.3615" height="9.22315" rx="4.61158" fill="#0066FF"/>
                                </svg>

                        </div>

                        <div className='flex self-center'>
                            <svg className='mt-1' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.55248 0.808126C6.85854 -0.098927 8.14146 -0.098927 8.44752 0.808126L9.46209 3.81499C9.59794 4.21762 9.97343 4.49043 10.3983 4.49521L13.5716 4.53096C14.5288 4.54174 14.9252 5.76187 14.1572 6.33324L11.611 8.22732C11.27 8.48095 11.1266 8.92236 11.2534 9.32795L12.1999 12.3569C12.4855 13.2706 11.4476 14.0247 10.6668 13.4708L8.07864 11.6345C7.73206 11.3886 7.26794 11.3886 6.92136 11.6345L4.33317 13.4708C3.55241 14.0247 2.51451 13.2706 2.80006 12.3569L3.74664 9.32795C3.87339 8.92236 3.72997 8.48095 3.38902 8.22732L0.842852 6.33324C0.0747693 5.76187 0.471212 4.54174 1.42845 4.53096L4.60166 4.49521C5.02657 4.49043 5.40206 4.21762 5.53791 3.81499L6.55248 0.808126Z" fill="#FFB547"/>
                            </svg>
                            <p className='ml-2'>4.3</p>
                        </div>

                        <div>
                            <button className='border-2 text-blue-600 border-blue-600 p-2 px-4 rounded-full'>
                                View course
                            </button>
                        </div>
                    </li>
                   
                </ul>
                <div className=' text-blue-600 text-right mt-4'>
                    View all
                </div>
                </div>
            


        </div>
    </div>
    </div>
  )
}

export default StuCourses
