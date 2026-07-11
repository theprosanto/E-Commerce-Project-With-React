import React from 'react'
import Container from '../../Components/Container'
import Cards from '../../Components/Cards'

import { MdArrowForwardIos } from "react-icons/md";

import coat from '../../assets/BestSellingProducts/coat.png'
import Guccibag from '../../assets/BestSellingProducts/Guccibag.png'
import CPUCooler from '../../assets/BestSellingProducts/CPUCooler.png'
import SmallBookSelf from '../../assets/BestSellingProducts/SmallBookSelf.png'
import GamingConsole from '../../assets/GamingConsole.png'
import WiredKeyboard from '../../assets/WiredKeyboard.png'
import GamingMonitor from '../../assets/GamingMonitor.png'
import Chair from '../../assets/Chair.png'
import CustomButton from '../../Components/CustomButton';
import TimerCountDount from '../../Components/TimerCountDount';
import BreadCrumb from '../../Components/BreadCrumb';

const Shop = () => {
    return (
        <div className='py-25'>
            <Container>

                <BreadCrumb/>

                <div className='flex justify-between mb-7.5'>
                    <h1 className='font-bold text-[20px]'>Shop by Category</h1>
                    <div className='flex items-center gap-3'>
                        <h3>Show:</h3>
                        <select className=' border border-[#d9d9d9] rounded-sm py-1 px-5'>
                            <option>6</option>
                            <option>9</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>


                <div className='flex justify-between'>
                    <div className='w-[20%]'>
                        <ul className='space-y-4 w-54.25'>
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
                    <div className='w-[80%] flex gap-15 flex-wrap'>
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

                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Shop
