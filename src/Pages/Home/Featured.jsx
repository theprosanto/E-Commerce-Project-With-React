import React from 'react'
import Container from '../../Components/Container'
import TitleAndHeading from '../../Components/TitleAndHeading'


import ps5 from '../../assets/FeaturedProducts/ps5.png'
import woman from '../../assets/FeaturedProducts/woman.png'
import minibox from '../../assets/FeaturedProducts/minibox.png'
import gucci from '../../assets/FeaturedProducts/gucci.png'

const Featured = () => {
    return (
        <div>

            <Container>
                <div>
                    <TitleAndHeading>Featured</TitleAndHeading>
                    <h1 className='font-semibold font-inter text-[36px]'>New Arrival</h1>
                </div>

                <div className='mt-15 mb-35'>
                    <div className='w-142.5 h-150 relative'>
                        <img src={ps5} alt="" />
                        <div className=' text-white absolute top-111.5 left-8'>
                            <h1 className='font-inter font-semibold text-[24px]'>PlayStation 5</h1>
                            <p className='font-Poppins text-[14px] leading-5.25 my-4'>Black and White version of the PS5 <br /> coming out on sale.</p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Featured
