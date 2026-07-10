import React from 'react'
import Slider from "react-slick";
import Cards from '../Components/Cards';

import GamingConsole from '../assets/GamingConsole.png'


const FlashProducts = () => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };


  return (
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
  );
}

export default FlashProducts
