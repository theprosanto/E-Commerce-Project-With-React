import React from 'react'
import Container from '../../Components/Container'
import TitleAndHeading from '../../Components/TitleAndHeading'
import CustomButton from '../../Components/CustomButton'
import Cards from '../../Components/Cards'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import coat from '../../assets/BestSellingProducts/coat.png'
import Guccibag from '../../assets/BestSellingProducts/Guccibag.png'
import CPUCooler from '../../assets/BestSellingProducts/CPUCooler.png'
import SmallBookSelf from '../../assets/BestSellingProducts/SmallBookSelf.png'

const BestSellingProducts = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container>
        <div className='flex justify-between'>  
        <div>
            <TitleAndHeading>This Month</TitleAndHeading>
            <h1 className='font-semibold font-inter text-[36px]'>Best Selling Products</h1>
        </div>
        <CustomButton className="mt-14">View All</CustomButton>
        </div>



           <div className="slider-container mt-15 mb-35">
      <Slider {...settings}>
        <div>
            <Cards
            imgSrc={coat}
            productTitle="The North Coat"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount=""
            productSold="88">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={Guccibag}
            productTitle="Gucci Duffle Bag"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount=""
            productSold="88">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={CPUCooler}
            productTitle="HAVIT HV-G92 Gamepad"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount=""
            productSold="88">
            </Cards> 
        </div>
        <div>
            <Cards
            imgSrc={SmallBookSelf}
            productTitle="HAVIT HV-G92 Gamepad"
            productPrice="120"
            productOriginalPrice="160"
            productDiscount=""
            productSold="88">
            </Cards> 
        </div>
      </Slider>
    </div>
        
      </Container>
    </div>
  )
}

export default BestSellingProducts
