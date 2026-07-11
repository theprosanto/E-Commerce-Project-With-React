import React from 'react'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import LeftArrowBtn from './LeftArrowBtn';
import RIghtArrowBtn from './RIghtArrowBtn';


const LeftRightArrowButton = () => {
    return (
        <div>
            <div className='flex gap-2 items-center mt-14'>
                <LeftArrowBtn/>
                <RIghtArrowBtn/>
            </div>
        </div>
    )
}

export default LeftRightArrowButton
