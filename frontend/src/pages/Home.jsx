import React from 'react'
import LeftSideBar from '../Components/LeftSideBar'
import RightSideBar from '../Components/RightSideBar'
import Feed from '../Components/Feed'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSideBar/>
       <Outlet/>
        <RightSideBar/>

    </div>
  )
}

export default Home