import React from 'react'
import Container from './Container'

const HeaderTop = () => {
  return (
        <div className=' text-white bg-black py-3'>
          <Container>
        <div className='flex items-center justify-between'>
          <div>

        </div>
        <div className='flex gap-2 items-center'>
          <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
          <a className='font-semibold text-[14px]' href="#">ShopNow</a>
        </div>
        <div>
            <select className='bg-black' name="" id="">
              <option value="text">English</option>
              <option value="text">Bengali</option>
            </select>
        </div>
        </div>
    </Container>
        </div>
  )
}

export default HeaderTop
