import React, { useEffect, useState } from 'react'
import { countDownDateAndTime } from 'countdown-date-time';

const TimerCountDount = () => {

    const conduct_date = '2027-03-25 16:54:00';
    const [count, setCount] = useState({})



    useEffect(() => {
        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)
        }, 1000);

    })


    return (
        <div>

            <div className='flex gap-5 items-center mt-10 ml-21.75'>
                <div>
                    <p className='font-medium text-[12px]'>Days</p>
                    <h1 className='font-bold text-[32px] font-inter leading-7.5'>{count.days}</h1>
                </div>
                <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                <div>
                    <p className='font-medium text-[12px]'>Hours</p>
                    <h1 className='font-bold text-[32px] font-inter leading-7.5'>{count.hours}</h1>
                </div>
                <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                <div>
                    <p className='font-medium text-[12px]'>Minutes</p>
                    <h1 className='font-bold text-[32px] font-inter leading-7.5'>{count.minutes}</h1>
                </div>
                <div className='text-[#DB4444] font-bold text-3xl'>:</div>
                <div>
                    <p className='font-medium text-[12px]'>Seconds</p>
                    <h1 className='font-bold text-[32px] font-inter leading-7.5'>{count.seconds}</h1>
                </div>
            </div>


        </div>
    )
}

export default TimerCountDount
