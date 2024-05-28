import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
        <h1 className='text-[100px] text-fuchsia-600'> Welcome to  Home page</h1>
        <Link to='/' className='px-6 py-3 bg-fuchsia-700 text-slate-100 font-medium'>Send Proposal</Link>
        
    </div>
  )
}

export default Home