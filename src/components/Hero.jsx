import React from 'react'
import Typed from "react-typed"



const Hero = () => {

  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl ease-in-out sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
         <div className='flex justify-center items-center p-3'>
            <p className='me:text-xl sm:text-4xl text-xl font-bold pr-2 py-4'>Fast, flexible financing for</p>
            <Typed className='md:text-xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['BTB','BTC','SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
         </div>
         <p  className='md:text-2xl text-xl text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC , & SASS platform.</p>
         <button className='text-white bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
