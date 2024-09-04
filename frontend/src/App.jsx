import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Feed from './Components/Feed'

const App = () => {
  return (
    <div>
  <Routes>
  <Route path="/home" element={<Home />}>
        <Route index element={<Feed />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>

          
    </div>
  )
}

export default App