import React from 'react'
import discountIcon from '../assets/Discount.svg'
import robot from '../assets/robot.png'

const Hero = () => {
  return (
    <section className="hero-section max-lg:flex-col flex pt-[5rem] pl-[13rem] max-md:pl-[0rem] max-md:pt-0 max-md:items-center">
      <div className="hero-content w-[50%] max-md:pt-[10rem] max-md:w-[90%]">
        <div
          className="discount px-4 py-1 rounded-[20px] bg-gray-gradient w-fit 
        max-md:w-fit flex items-center"
        >
          <img src={discountIcon} alt="Discount" />
          <p className="uppercase max-sm:text-[1.4rem]">
            20% <span className="uppercase text-gray-400">Discount for</span> 1
            Month
            <span className="uppercase text-gray-400"> Account</span>
          </p>
        </div>
        <div className="main-heading max-md:w-[90%] max-md:mx-auto">
          <h1 className="text-[10rem] max-md:text-[5.5rem] max-md: max-md:leading-[7rem] leading-[10rem] font-semibold mt-[2rem]">
            The Next <br />
            <span className="gradient-color">Generation</span>
            <br /> Payment Method.
          </h1>
        </div>
        <p className="text-[1.8rem] mt-[2rem] text-gray-400 w-[70%] max-md:w-[90%] max-md:mx-auto">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. <br />
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className="hero-img w-[50%] max-md:w-[100%] max-md:mt-16 h-[550px] flex justify-end relative ">
        <img src={robot} alt="Robot" className=" object-contain z-10" />
        <div className="w-[100%] h-[100%] component-gradient absolute rounded-full" />
      </div>
    </section>
  )
}

export default Hero
