import React from 'react'

import { IoIosArrowForward } from "react-icons/io";

const RIghtArrowBtn = () => {
    return (
        <div>
            <div className='relative items-center'>
                <div className='w-11.5 h-11.5 bg-[#F5F5F5] rounded-full'></div>
                <IoIosArrowForward className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl' />
            </div>
        </div>
    )
}

export default RIghtArrowBtn
