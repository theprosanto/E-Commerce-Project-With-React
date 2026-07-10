import React from 'react'

const LeftRightArrowButton = () => {
    return (
        <div>
            <div className='flex gap-2 items-center ml-113'>
                <div className='relative items-center'>
                    <div className='w-11.5 h-11.5 bg-[#F5F5F5] rounded-full'></div>
                    <IoIosArrowBack className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl' />
                </div>
                <div className='relative items-center'>
                    <div className='w-11.5 h-11.5 bg-[#F5F5F5] rounded-full'></div>
                    <IoIosArrowForward className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default LeftRightArrowButton
