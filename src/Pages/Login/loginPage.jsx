import React from 'react'
import Container from '../../Components/Container'
import CustomButton from '../../Components/CustomButton';

import loginImage from '../../assets/loginImage.png'
import BreadCrumb from '../../Components/BreadCrumb';

const loginPage = () => {
  return (
    <div className='mt-15 mb-35'>
      <Container>
        <div className='flex gap items-center'>
          <img src={loginImage} alt="" className="-translate-x-43" />
          <div className="">
            <h1 className='font-semibold font-inter text-[36px]'>Log in to Exclusive</h1>
            <p className='mt-5 mb-12'>Enter your details below</p>

            <input type="email" placeholder='Email or Phone Number' className='border-b border-[#000000] w-94 h-8 text-gray-600' />
            <input type="password" placeholder='Password' className='my-10 border-b border-[#000000] w-94 h-8 text-gray-600' />

              <div className='flex gap-21 items-center'>
                <CustomButton>Log In</CustomButton>
                <a href="" className='text-[#DB4444]'>Forget Password?</a>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default loginPage
