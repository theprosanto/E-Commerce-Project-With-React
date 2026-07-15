import React from 'react'
import Container from './Container'
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/Logo.png'
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className='pb-4 pt-10 border-b'>
      <Container>
        <div className='flex items-center justify-between'> 
          <NavLink to="/"><img src={logo} alt="" /></NavLink>
        <ul className='flex gap-12 items-center'>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>Contact</li>
          <li>About</li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
        <div className='flex gap-8.5 py-1.75 px-5 bg-[#e7e7e7] items-center'>
          <input type="search" placeholder='What are you looking for?' className='text-[16px] w-full text-[#7D8184] opacity-70'/>
          <IoIosSearch className='text-[34px]' />
        </div>
        <div className='flex gap-4 items-center'>
        <div className='flex gap-4 items-center'>
          <NavLink to="login"><a href="">Login</a></NavLink>
          <NavLink to="singup"><a href="">SingUp</a></NavLink>
          
        </div>
          <MdFavoriteBorder className='text-[34px]' />
          <div className='relative cursor-pointer'>
            <IoCartOutline className='text-[34px]'/>
           <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">
                0</span>
          </div>
        </div>
        </div>       
      </Container>
    </div>
  )
}

export default NavBar
