import React from 'react'
import Avatar from 'react-avatar'
import { FaRegCommentDots } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
const Tweet = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className='my-2 py-3'>
                <div className='flex '>
                    <Avatar src="https://tse3.mm.bing.net/th?id=OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw&pid=Api&P=0&h=220" size="50" round={true} className='cursor-pointer' />
                    <div className='ml-2 w-full mt-1'>
                        <div className='flex items-center gap-1'>
                            <h1 className='font-bold'>Rao Ali Murad</h1>
                            <p className='text-gray-500 text-sm'>@raoalimurad . 1m</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, est!</p>
                        </div>
                        <div className='flex justify-between items-center py-4 px-1'>
                            <div className='flex gap-1 items-center cursor-pointer'>
                                <FaRegCommentDots size={'22px'}/>
                                <p className='text-gray-400'>0</p>
                            </div>
                            <div className='flex gap-1 items-center cursor-pointer'>
                                <CiHeart size={'22px'}/>
                                <p className='text-gray-400'>0</p>
                            </div>
                            <div className='flex gap-1 items-center cursor-pointer'>
                                <CiBookmark size={'22px'}/>
                                <p className='text-gray-400'>0</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tweet