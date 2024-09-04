import React from 'react'
import Avatar from 'react-avatar';
import { FaSearch } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div className='w-[30%] ml-2 mt-4'>
      <div>
        <div className=' flex items-center bg-gray-200 p-2  rounded-full w-full ml-2'>
          <FaSearch className='text-lg' />
          <input type="text" className='bg-transparent border-none outline-none px-2 w-[80%] text-gray-500' placeholder='Search' />
        </div>

        <div className='p-5 bg-gray-100'>
          <h1 className='my-1 font-bold text-xl'>Who to follow</h1>
          <div className='flex justify-between w-full my-4 border-b border-gray-200'>
            <div className='flex'>
              <Avatar src="https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220" size="60" round={true} className='cursor-pointer' />
              <div className=''>
                <h1 className='font-bold'>Rao Ali Murad</h1>
                <p className='text-gray-500 text-sm'>@raoalimurad</p>
              </div>
            </div>
            <div>
              <button className='bg-black px-2 py-2 text-white rounded-full w-[90px]'>Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar