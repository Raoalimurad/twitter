import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex items-center justify-around w-[80%]'>
        <div>
          <img width={'300px'} className='' src="https://tse3.mm.bing.net/th?id=OIP.K23ibJJG7RQQybFSgC_ZegHaHa&pid=Api&P=0&h=220" alt="twiter-img" />
        </div>
        <div>
          <h1 className='text-6xl font-bold my-5'>
            Happening now.
          </h1>
          <h1 className='mt-4 mb-2 font-bold text-2xl'>Login</h1>
          <div className='w-[50%]'>
         <div>
         <input type="text" className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full mt-2 font-semibold w-full'placeholder='Email'/>
         </div>
         <div>
         <input type="text" className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full mt-2 font-semibold w-full'placeholder='Password'/>
         </div>
         <div>
          <button className='px-2 py-2 rounded-full font-semibold bg-blue-500 w-full my-4 text-lg text-white'>Login</button>
          <p>Don't have an account <span className='text-blue-800 font-bold'><Link to='/signup'>Register</Link></span></p>
         </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Login