import React from 'react'
import Container from '../../Components/Container'

import fastDelivery from '../../assets/fastDelivery.png'
import CustomerService from '../../assets/CustomerService.png'
import MoneyBack from '../../assets/MoneyBack.png'

const Support = () => {
  return (
    <div>

        <Container>
            <div className='flex justify-between'>
                <div>
                    <img src={fastDelivery} alt="" />
                    <h1>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div>
                    <img src={fastDelivery} alt="" />
                    <h1>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>
                </div>
                <div>
                    <img src={fastDelivery} alt="" />
                    <h1>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>
                </div>
            </div>
        </Container>
      
    </div>
  )
}

export default Support
