import React from 'react'
import Container from '../../Components/Container'
import CustomButton from '../../Components/CustomButton';

import loginImage from '../../assets/loginImage.png'
import IconGoogle from '../../assets/IconGoogle.png'

const SingUp = () => {
  return (
    <div className='mt-15 mb-35'>
      <Container>
        <div className='flex gap items-center'>
          <img src={loginImage} alt="" className="-translate-x-43" />
          <div className="">
            <h1 className='font-semibold font-inter text-[36px]'>Create an account</h1>
            <p className='mt-5 mb-12'>Enter your details below</p>

            <input type="text" placeholder='Name' className='border-b border-[#000000] w-94 h-8 text-gray-600' />
            <input type="email" placeholder='Email or Phone Number' className='border-b border-[#000000] w-94 h-8 text-gray-600 my-10' />
            <input type="password" placeholder='Password' className='border-b border-[#000000] w-94 h-8 text-gray-600 mb-10' />

              <div className=''>
                <CustomButton className='w-94'>Create Account</CustomButton>

                <CustomButton className='w-94 bg-white border-2 mt-4 mb-8 border-gray-400'>
                    <div className='flex gap-4 items-center ml-10 '>
                    <img src={IconGoogle} alt="" />
                    <span className='text-black'>Sign up with Google</span>
                </div>
                </CustomButton>
                
                

                <div className=' flex gap-4 ml-15'>
                    <a href="/login">Already have account?</a>
                    <a href="/login" className='border-b font-semibold'>Log in</a>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SingUp
