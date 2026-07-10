import React from 'react'
import Slider from "react-slick";
import Cards from '../Components/Cards';

import GamingConsole from '../assets/GamingConsole.png'
import WiredKeyboard from '../assets/WiredKeyboard.png'
import GamingMonitor from '../assets/GamingMonitor.png'
import Chair from '../assets/Chair.png'


const FlashProducts = () => {
     const settings = {
    dots: false,
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
        
      </Slider>
    </div>
  );
}

export default FlashProducts
