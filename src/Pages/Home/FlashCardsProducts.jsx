import React from 'react'
import Slider from "react-slick";
import Cards from '../../Components/Cards';
import Container from '../../Components/Container';
import TitleAndHeading from '../../Components/TitleAndHeading';


import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


import GamingConsole from '../../assets/GamingConsole.png'
import WiredKeyboard from '../../assets/WiredKeyboard.png'
import GamingMonitor from '../../assets/GamingMonitor.png'
import Chair from '../../assets/Chair.png'
import CustomButton from '../../Components/CustomButton';



const FlashCardsProducts = () => {
     const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


  return (
    <>
      <Container>
            <div className='mt-20 mb-11'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center'>
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
                            </div>
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
                </div>


           <div className="slider-container">
      <Slider {...settings}>
        <div>
            <Cards
            imgSrc={GamingConsole}
            productTitle="HAVIT HV-G92 Gamepad"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount="42"
            productSold="88">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={WiredKeyboard}
            productTitle="AK-900 Wired Keyboard"
            productPrice="960"
            productOriginalPrice="1160"
            productDiscount="35"
            productSold="75">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={GamingMonitor}
            productTitle="Samsung 27-inch Gaming Monitor"
            productPrice="370"
            productOriginalPrice="400"
            productDiscount="42"
            productSold="30">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={Chair}
            productTitle="S-Series Comfort Chair"
            productPrice="375"
            productOriginalPrice="400"
            productDiscount="25"
            productSold="99">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={GamingConsole}
            productTitle="HAVIT HV-G92 Gamepad"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount="42"
            productSold="88">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={GamingConsole}
            productTitle="HAVIT HV-G92 Gamepad"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount="42"
            productSold="88">
            </Cards> 
        </div>
      </Slider>
    </div>

        <CustomButton className="mx-auto block mt-19">View All Products</CustomButton>
        <div className='border border-gray-200 my-17.5'></div>

      </Container>
    
    </>
  );
}

export default FlashCardsProducts
