import React from 'react'
import Slider from 'react-slick'
import Container from '../../Components/Container'
import TitleAndHeading from '../../Components/TitleAndHeading'
import LeftRightArrowButton from '../../Components/LeftRightArrowButton'
import Cards from '../../Components/Cards'

import DogFood from '../../assets/OurProducts/DogFood.png'
import DSLRCamera from '../../assets/OurProducts/DSLRCamera.png'
import GamingLaptop from '../../assets/OurProducts/GamingLaptop.png'
import CurologyProductSet from '../../assets/OurProducts/CurologyProductSet.png'
import KidsElectricCar from '../../assets/OurProducts/KidsElectricCar.png'
import ZoomSoccerCleats from '../../assets/OurProducts/ZoomSoccerCleats.png'
import USBGamepad from '../../assets/OurProducts/USBGamepad.png'
import QuiltedSatinJacket from '../../assets/OurProducts/QuiltedSatinJacket.png'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CustomButton from '../../Components/CustomButton'



const OurProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 2,
    };
    return (
        <div>

            <Container>
                <div className='flex items-center justify-between'>
                    <div>
                        <TitleAndHeading>Our Products</TitleAndHeading>
                        <h1 className='font-semibold font-inter text-[36px]'>Explore Our Products</h1>
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


                <div className="slider-container mt-15">
                    <Slider {...settings}>
                        <div>
                            <Cards
                                imgSrc={DogFood}
                                productTitle="Breed Dry Dog Food"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div className='mt-15'>
                            <Cards
                                imgSrc={DSLRCamera}
                                productTitle="Gucci Duffle Bag"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div>
                            <Cards
                                imgSrc={GamingLaptop}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div className='mt-15'>
                            <Cards
                                imgSrc={CurologyProductSet}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div>
                            <Cards
                                imgSrc={KidsElectricCar}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div className='mt-15'>
                            <Cards
                                imgSrc={ZoomSoccerCleats}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div>
                            <Cards
                                imgSrc={USBGamepad}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                        <div className='mt-15'>
                            <Cards
                                imgSrc={QuiltedSatinJacket}
                                productTitle="HAVIT HV-G92 Gamepad"
                                productPrice="120"
                                productOriginalPrice="160"
                                productDiscount=""
                                productSold="88">
                            </Cards>
                        </div>
                    </Slider>
                </div>



                
        
        <CustomButton className="mx-auto block mt-19">View All Products</CustomButton>
        <div className='border border-gray-200 my-17.5'></div>


            </Container>

        </div>
    )
}

export default OurProducts
