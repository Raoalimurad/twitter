import React from 'react'
import Avatar from 'react-avatar';
import { IoArrowBack } from "react-icons/io5";
import {Link} from 'react-router-dom'
const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200 px-1'>
      <div>
        <div className='flex items-center gap-3 py-2'>
          <Link to='/home' className='p-2 rounded-full text-center cursor-pointer font-bold hover:bg-gray-300'>
        <IoArrowBack size={'22px'} />
          </Link>
        <div>
          <h1 className='text-xl font-bold'>Rao Ali Murad</h1>
          <p className='text-gray-600  font-semibold'>10 posts</p>
        </div>
        </div>
        <img src='https://tse1.mm.bing.net/th?id=OIP.jOtowa9XkqzmGvzVu8TwGQHaEo&pid=Api&P=0&h=220' alt="banner" className='w-full h-40 object-cover'/>
        <div className='absolute top-44 border-4 border-white rounded-full'>
         <Avatar src="https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220" size="120" round={true} className='cursor-pointer'/>
         </div>
         <div className='text-right mt-3'>
          <button className='px-4 py-2 border border-gray-400 rounded-full font-semibold hover:bg-gray-200'>Edit Profile</button>
         </div>
         <div className='mt-4 ml-4'>
          <h1 className='font-bold text-xl'>Rao Ali Murad</h1>
          <p>@raoalimurad</p>
         </div>
         <div className='m-4 text-sm text-gray-700'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quia tenetur corporis nihil fuga, quas eveniet repellat veniam aspernatur veritatis!</p>
         </div>
      </div>
    </div>
  )
}

export default Profile