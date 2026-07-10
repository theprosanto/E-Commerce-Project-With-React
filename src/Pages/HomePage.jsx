import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

import BannarAds from '../assets/BannerAds.png'

import Container from '../Components/Container'
import TitleAndHeading from '../Components/TitleAndHeading';

const HomePage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: dots => (
      <div>
        <ul style={{ margin: "30px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className='w-3 h-3 rounded-full bg-gray-400'
      >
    
      </div>
    )
    };
    return (
        <div className=''>
            <Container>
                <div className='flex gap-13'>
                    <div className='w-[20%] border-r'>
                        <ul className='space-y-4 mt-12 w-54.25'>
                            <div className='flex gap-13.75 items-center'>
                                <li>Woman’s Fashion</li>
                                <MdArrowForwardIos />
                            </div>


                            <div className='flex gap-20.25 items-center'>
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
                        <Slider {...settings}>
                            <div>
                                <img className='w-full' src={BannarAds} alt="" />
                            </div>
                            <div>
                                <img className='w-full' src={BannarAds} alt="" />
                            </div>
                            <div>
                                <img className='w-full' src={BannarAds} alt="" />
                            </div>
                            <div>
                                <img className='w-full' src={BannarAds} alt="" />
                            </div>
                            <div>
                                <img className='w-full' src={BannarAds} alt="" />
                            </div>
                        
                        </Slider>
                    </div>
                </div>

   {/* Flash Sales Section */}


                <div className='mt-30.5 mb-20'>
                    

                    <div className='flex items-center'>
                        <div>
                        <TitleAndHeading>Today’s</TitleAndHeading>
                        <h1 className='font-semibold font-inter text-[36px]'>Flash Sales</h1>
                    </div>


                    <div className='flex gap-5 items-center mt-10 ml-21.75'>
                        <div>
                            <p className='font-medium text-[12px]'>Days</p>
                            <h1 className='font-bold text-[32px] font-inter leading-7.5'>05</h1>
                        </div>
                        <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                        <div>
                            <p className='font-medium text-[12px]'>Hours</p>
                            <h1 className='font-bold text-[32px] font-inter leading-7.5'>12</h1>
                        </div>
                        <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                        <div>
                            <p className='font-medium text-[12px]'>Minutes</p>
                            <h1 className='font-bold text-[32px] font-inter leading-7.5'>30</h1>
                        </div>
                        <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                        <div>
                            <p className='font-medium text-[12px]'>Seconds</p>
                            <h1 className='font-bold text-[32px] font-inter leading-7.5'>45</h1>
                        </div>
                            
                            
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




                    </div>








                </div>








            </Container>
        </div>
    )
}

export default HomePage
