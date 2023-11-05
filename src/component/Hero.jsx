import React, { useRef, useState } from 'react'

const Hero = () => {

  return (
    <>
      <div className="container p-4 relative my-6">
        <div className='flex flex-col text-center'>
          <p className=' text-white xl:text-7xl text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold'>TRACK AND TRADE</p>
          <p className='bg-gradient-to-b bg-transparent  md:text-4xl lg:text-6xl text-xl sm:text-2xl xl:text-8xl bg-clip-text  mt-2 from-[#2600fc] to-[#ff00ea] text-transparent
  -webkit-background-clip: text"' >CRYPTO CURRENCIES</p>
        </div>
        <div className="opacity-animation bitcoin-absolute absolute top-1/2 -translate-y-1/2 left-3">
          <img src="/public/assets/imgs/bit-coin.png" alt="" className='w-16 sm:w-20 lg:w-28 xl:w-36' />
        </div>
        <div className="opacity-animation bitcoin-absolute absolute top-1/2 -translate-y-1/2 right-3">
          <img src="/public/assets/imgs/eth-coin.png" alt="" className='w-16 sm:w-20 lg:w-28 xl:w-36' />
        </div>

      </div>
    </>
  )
}

export default Hero