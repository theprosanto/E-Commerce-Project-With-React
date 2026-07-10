import React from 'react'
import TitleAndHeading from '../../Components/TitleAndHeading';
import Container from '../../Components/Container';
import CategoriesCards from '../../Components/CategoriesCards';

import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { PiHeadphonesLight } from "react-icons/pi";
import { GiConsoleController } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";




const BrowseCategorySection = () => {
    return (
       <div className=''>
         <Container>
            <div className='flex items-center justify-between'>
                <div>
                    <TitleAndHeading>Categories</TitleAndHeading>
                    <h1 className='font-semibold font-inter text-[36px]'>Browse By Category</h1>
                </div>
                <div className='flex gap-2 items-center mt-14'>
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

            <div className='flex gap-6 justify-between mt-10'>
                <CategoriesCards
                    DeviceName="Phones"
                    DeviceIcon={<CiMobile3 className='text-5xl' />} />
                <CategoriesCards
                    DeviceName="Computers"
                    DeviceIcon={<HiOutlineComputerDesktop className='text-5xl' />} />
                <CategoriesCards
                    DeviceName="SmartWatch"
                    DeviceIcon={<BsSmartwatch className='text-5xl' />} />
                <CategoriesCards
                    DeviceName="Camera"
                    DeviceIcon={<CiCamera className='text-5xl' />} />
                <CategoriesCards
                    DeviceName="HeadPhones"
                    DeviceIcon={<PiHeadphonesLight className='text-5xl' />} />
                <CategoriesCards
                    DeviceName="Gaming"
                    DeviceIcon={<GiConsoleController className='text-5xl' />} />
            </div>
            <div className='border border-gray-200 my-17.5'></div>
        </Container>
       </div>
    )
}

export default BrowseCategorySection
