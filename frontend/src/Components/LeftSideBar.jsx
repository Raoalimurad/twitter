import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    return (
        <div className='w-[20%]'>

            <div>
                <img width={'70px'} className='ml-2 mt-1' src="https://tse3.mm.bing.net/th?id=OIP.K23ibJJG7RQQybFSgC_ZegHaHa&pid=Api&P=0&h=220" alt="twiter-img" />
            </div>

            <div className='my-4'>
                <Link to='/home' className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <IoMdHome size='25px' /> <h3 className='font-bold text-xl'>Home</h3>
                </Link>

                <div className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <FaSearch size='23px' /> <h3 className='font-bold text-xl'>Explore</h3>
                </div>

                <div className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <IoIosNotifications size='25px' /> <h3 className='font-bold text-xl'>Notifications</h3>
                </div>

                <Link to='/home/profile' className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <FaUser size='20px' /> <h3 className='font-bold text-xl'>Profile</h3>
                </Link>

                <div className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <FaBookmark size='25px' /> <h3 className='font-bold text-xl'>Bookmarks</h3>
                </div>

                <div className='flex gap-2 items-center cursor-pointer my-2 py-2 px-4 hover:bg-gray-200 rounded-md'>
                    <MdLogout size='25px' /> <h3 className='font-bold text-xl'>Logout</h3>
                </div>

                <div>
                    <button className='bg-blue-500 px-4 py-2 text-white text-xl font-bold w-full rounded-full'>Post</button>
                </div>

            </div>
        </div>
    )
}

export default LeftSideBar