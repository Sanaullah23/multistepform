import React from 'react'
import  CheckOut  from './page/CheckOut'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<CheckOut/>} />
      <Route path='/home' element={<Home/>} />
     </Routes>
    </div>
  )
}

export default App