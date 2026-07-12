import React from 'react'
import { NavLink, useLocation } from 'react-router'


const BreadCrumb = () => {

  let {pathname} = useLocation()

  let PathLocation = pathname.split("/")

  return (
    <div className='flex gap-3 mb-12'>
        <h1><NavLink to="/">Home</NavLink></h1>
        <h1>/</h1>
        <h1>{PathLocation}</h1>
    </div>
  )
}

export default BreadCrumb
