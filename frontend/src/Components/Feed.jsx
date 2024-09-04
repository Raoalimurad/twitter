import React from 'react'
import CreatePost from './feedComponents/CreatePost'
import Tweet from './feedComponents/Tweet'

const Feed = () => {
  return (
    <div className='w-[50%] border border-gray-200'>
        <CreatePost/>
        <Tweet/>
       
    </div>
  )
}

export default Feed