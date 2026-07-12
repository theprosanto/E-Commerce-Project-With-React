import React from 'react'
import HeaderTop from './HeaderTop'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import FooterSection from './FooterSection'

const RootLayout = () => {
  return (
    <div>

        <HeaderTop/>
        <NavBar/>
        <Outlet/>
        <FooterSection/>
      
    </div>
  )
}

export default RootLayout
