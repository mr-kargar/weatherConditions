import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Header() {
  return (
    <>
      <div className="flex items-center container justify-between max-w-6xl  px-4 shadow">
        <Link to={"/"}>
          <div className='flex items-center'>
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="weather logo" className='h-20 w-20 md:h-28 md:w-28' />
            <h1 className='text-3xl ml-4 md:text-6xl'>Weather Conditions</h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center container max-w-6xl p-2 px-4 shadow font-bold justify-between">
        <ul className='flex gap-4 items-center'>
          <li ><NavLink to={"/1"} className={`${({ isActive }) => isActive ? "text-blue-500" : undefined} hover:text-blue-500`} >version 1</NavLink>  </li>
          <li ><NavLink to={"2"} className={`${({ isActive }) => isActive ? "text-blue-500" : undefined} hover:text-blue-500`}>version 2</NavLink> </li>
        </ul>
        <ul>
          <li><NavLink to={"persian"} className={`${({ isActive }) => isActive ? "text-blue-500" : undefined} hover:text-blue-500 font-vazir`}>ورژن فارسی</NavLink></li>
        </ul>
      </div>

    </>
  )
}

export default Header