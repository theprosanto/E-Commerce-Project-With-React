import React from 'react'


const CategoriesCards = ({DeviceName,DeviceIcon}) => {
  return (
    <div className='w-42.5 h-36.25 border text-center rounded-sm items-center place-content-center'>
        <div className='flex items-center justify-center'>
            {DeviceIcon}
        </div>
        <h1 className='text-[14px] mt-4'>{DeviceName}</h1>
    </div>
  )
}

export default CategoriesCards
