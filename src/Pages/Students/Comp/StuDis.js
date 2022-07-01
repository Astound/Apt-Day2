import React from 'react'

function StuDis() {
  return (
    <div>
      <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required/>
    </div>
</form>
    <div className='mt-4'>
        <div className=" bg-violet-600 text-white p-4 rounded-lg">
            <p className=' text-sm'> Discussion Box</p>
            <p className=' text-xl'> 3 New messages</p>
        </div>
    </div>
    </div>
  )
}

export default StuDis
