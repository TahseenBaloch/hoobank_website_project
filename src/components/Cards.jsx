import React from 'react'
import cards from '../assets/card.png'

const Cards = () => {
  return (
    <section
      className="flex justify-between w-[80%] mx-auto items-center
    max-md:flex-col"
    >
      <div className="w-[40%] max-md:w-full">
        <h1 className="text-white text-[4.3rem] font-semibold">
          Find a better card deal in a few steps.
        </h1>
        <p className="text-gray-400 text-[1.8rem] my-[3rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          repudiandae autem itaque laboriosam debitis adipisci eum ut inventore,
          beatae facilis.
        </p>
        <button className="capitalize py-[2rem] px-[4rem] rounded-[1.5rem] button-gradient text-black font-semibold">
          get started
        </button>
      </div>
      <div className="w-[50%] relative max-md:w-full max-md:mt-[8rem]">
        <img src={cards} alt="cards" className=" object-contain z-10" />
        <div className="absolute w-[100%] h-[100%] border top-0 left-0 component-gradient2 rounded-full" />
      </div>
    </section>
  )
}

export default Cards
