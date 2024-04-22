import React from 'react'
import {  NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-yellow-400  '>
        <nav className='p-10 max-w-6xl flex justify-between items-center'>         
        <NavLink className='text-white text-lg shadow hover:shadow-lg active:shadow-xl p-4 rounded-xl transition duration-150 ease-in-out cursor-pointer ' to='/'>Christopher.</NavLink>
        <NavLink className='text-white text-lg shadow hover:shadow-lg active:shadow-xl p-4 rounded-xl transition duration-150 ease-in-out cursor-pointer ' to='https://github.com/chrisdeveloper20?tab=repositories' target="_blank" >Repositories</NavLink>
        </nav>
    </div>
  )
}

export default Navbar