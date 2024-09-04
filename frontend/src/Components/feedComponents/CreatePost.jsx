import React from 'react'
import Avatar from 'react-avatar';
import { RiGalleryLine } from "react-icons/ri";

const CreatePost = () => {
  return (
    <div className='w-[100%]  mt-4'>
       
        <div className='flex items-center justify-evenly border-b border-gray-300'>
            <h2 className='font-bold text-gray-700 text-xl cursor-pointer hover:bg-gray-300 px-4 py-1 rounded-full'>For you</h2>
            <h2 className='font-bold text-gray-700 text-xl cursor-pointer hover:bg-gray-300 px-4 py-1 rounded-full'>Following</h2>
        </div>

     <div className='my-4 px-1 flex items-center gap-1 '>
        <div>
         <Avatar src="https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220" size="60" round={true} className='cursor-pointer'/>
         </div>

            <div>
            <input type="text" placeholder='What is happening?' className='w-full border-none outline-none text-lg' />
            </div>
     </div>

     {/* post  */}

     <div className='flex items-center justify-between px-1 py-3 border-b border-gray-300'>
     <RiGalleryLine size='22px' className='cursor-pointer text-blue-500'/>
     <button className='bg-blue-500 px-4 py-1 text-white text-md font-bold  rounded-full hover:bg-blue-600'>Post</button>
     </div>
       

    </div>
  )
}

export default CreatePost