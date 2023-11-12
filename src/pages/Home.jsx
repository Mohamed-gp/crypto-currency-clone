import React from 'react'
import Hero from '../component/Hero'
import Slider from '../component/Slider'
import Pagination from '../component/Pagination'
import Pricing from '../component/Pricing'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Slider/>
    <Pagination/>
    <Pricing/>
    <Footer/>
    </>
  )
}

export default Home