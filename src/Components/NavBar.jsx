import React from 'react'
import Container from './Container'
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import logo from '../assets/Logo.png'

const NavBar = () => {
  return (
    <div className='pb-4 pt-10 border-b'>
      <Container>
        <div className='flex items-center justify-between'> 
          <img src={logo} alt="" />
        <ul className='flex gap-12 items-center'>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
        <div className='flex gap-8.5 py-1.75 px-5 bg-[#e7e7e7] items-center'>
          <input type="search" placeholder='What are you looking for?' className='text-[16px] w-full text-[#7D8184] opacity-70'/>
          <IoIosSearch className='text-[34px]' />
        </div>
        <div className='flex gap-4 items-center'>
          <MdFavoriteBorder className='text-[34px]' />
          <IoCartOutline className='text-[34px]'/>
        </div>
        </div>       
      </Container>
    </div>
  )
}

export default NavBar
