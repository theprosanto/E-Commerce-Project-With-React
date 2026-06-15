import React from 'react'
import Slider from "react-slick";

import { MdArrowForwardIos } from "react-icons/md";
import BannarAds from '../assets/BannerAds.png'

import Container from '../Components/Container'

const HomePage = () => {
    return (
        <div className=''>
            <Container>
                <div className='flex gap-13'>
                    <div className='w-[20%] border-r'>
                        <ul className='space-y-4 mt-12'>
                            <div className='flex gap-12.75 items-center'>
                                <li>Woman’s Fashion </li>
                                <MdArrowForwardIos />
                            </div>


                            <div className='flex gap-12.75 items-center'>
                                <li>Men’s Fashion</li>
                                <MdArrowForwardIos />
                            </div>

                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </div>
                    <div className='w-[80%] mt-12'>
                        <img className='w-full' src={BannarAds} alt="" />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default HomePage
