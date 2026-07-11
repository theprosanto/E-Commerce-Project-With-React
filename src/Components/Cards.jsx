import React from 'react'


import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const Cards = ({ imgSrc, productTitle, productPrice, productOriginalPrice, productDiscount, productSold }) => {
    return (
        <div className='relative'>
            <img src={imgSrc} alt="" />
            <h1 className='font-medium leading-8 mt-4'>{productTitle}</h1>
            <div className='flex gap-2 items-center py-2 font-semibold'>
                <h2 className='text-[#DB4444]'>${productPrice}</h2>
                <h2 className='line-through text-gray-500'>${productOriginalPrice}</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <ul className='flex gap-1 items-center text-amber-500'>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                </ul>
                <h2 className='text-gray-500 font-semibold'>({productSold})</h2>
            </div>

            <div className='flex gap-40 absolute top-0 left-3 mt-3'>
                {productDiscount && (
                    <div className="bg-[#DB4444] text-white w-13.75 h-6.5 rounded-sm text-center text-[12px] flex items-center justify-center gap-1">
                        <h4>-</h4>
                        <p>{productDiscount}%</p>
                    </div>
                )}
                <div className='gap-2 items-center'>
                    <div className='bg-[#FFFFFF] w-8.5 h-8.5 flex rounded-full items-center justify-center'>
                        <FaRegHeart className='text-xl' />
                    </div>
                    <div className='bg-[#FFFFFF] mt-2 w-8.5 h-8.5 rounded-full flex items-center justify-center'>
                        <FiEye className='text-xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
