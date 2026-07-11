import React from 'react'
import Container from '../../Components/Container'

import loginImage from '../../assets/loginImage.png'

const loginPage = () => {
  return (
    <div className='mt-15 mb-35 flex'>
      <img src={loginImage} alt="" />
      <Container>
        <div>
          <div>
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <input
              type="email"
              placeholder="Enter your email"
              className=" placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
<br />
            <input
              type="password"
              placeholder="Enter your password"
              className="placeholder-gray-400 focus:outline-none focus:border-red-500"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default loginPage
