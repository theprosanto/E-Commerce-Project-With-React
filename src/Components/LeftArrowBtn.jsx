import React from 'react'

import { IoIosArrowBack } from "react-icons/io";

const LeftArrowBtn = () => {
    return (
        <div>
            <div className='relative items-center'>
                <div className='w-11.5 h-11.5 bg-[#F5F5F5] rounded-full'></div>
                <IoIosArrowBack className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl' />
            </div>

        </div>
    )
}

export default LeftArrowBtn
