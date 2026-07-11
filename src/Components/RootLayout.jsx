import React from 'react'
import HeaderTop from './HeaderTop'
import NavBar from './NavBar'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>

        <HeaderTop/>
        <NavBar/>
        <Outlet/>
      
    </div>
  )
}

export default RootLayout
