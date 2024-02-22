import React from 'react'
import { feedback } from '../data'
import quoteIcon from '../assets/quotes.svg'
import { logos } from '../data'

const Reviews = () => {
  return (
    <section className="w-[80%] mx-auto flex flex-col justify-between">
      <div className="flex max-md:flex-col justify-between items-center max-md:pb-[2rem] py-[8rem]">
        <h1 className="  text-white max-md:w-full max-md:text-[3.5rem] text-[4.3rem] w-[45%] font-semibold">
          What people are saying about us
        </h1>
        <p className=" max-md:w-full max-md:mt-[4rem] text-gray-400 text-[1.8rem] w-[45%]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-between max-md:flex-col">
        {feedback.map((person) => {
          const { id, content, name, title, img } = person
          return (
            <div className=" w-[30%] max-md:w-full max-md:mb-[5rem]">
              <img src={quoteIcon} alt="quote" className="my-[4rem]" />
              <p className="text-white text-[2rem] mb-[4rem]">{content}</p>
              <div className="flex">
                <img src={img} alt={title} className="w-[60px] h-[60px]" />
                <div className="ml-[2rem]">
                  <h5 className="text-white text-[2rem] font-semibold">
                    {name}
                  </h5>
                  <p className="text-gray-400">{title}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between my-[8rem] max-md:flex-col max-md:w-[80%] max-md:mx-auto max-md:my-[4rem]">
        {logos.map((logo) => {
          const { img, id } = logo
          return (
            <img
              key={id}
              src={img}
              className=" max-md:w-[100%] w-[19%] object-contain max-md:mb-[6rem] "
            />
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
