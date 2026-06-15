import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdArrowForwardIos } from "react-icons/md";
import BannarAds from '../assets/BannerAds.png'

import Container from '../Components/Container'

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

            </Container>
        </div>
    )
}

export default HomePage
