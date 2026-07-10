import React from 'react'

const TitleAndHeading = ({children, className}) => {
  return (
    <div className={className}>
      <div className='flex gap-2 items-center mb-4'>
        <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
        <h1 className='font-semibold text-[#DB4444]'>{children}</h1>
      </div>
    </div>
  )
}

export default TitleAndHeading
