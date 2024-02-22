import React from 'react'
import Star from '../assets/Star.svg'
import { advantages } from '../data'
const Advantages = () => {
  return (
    <section className="w-[80%] mx-auto flex justify-between relative max-md:flex-col">
      <div className="w-[45%] z-10 max-md:w-[100%]">
        <h1 className="text-[4.3rem] font-semibold">
          You will do business, we'll handle money.
        </h1>
        <p className="text-[1.8rem]  my-[3rem] text-gray-400">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards, and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="capitalize py-[2rem] px-[4rem] rounded-[1.5rem] button-gradient text-black font-semibold">
          get started
        </button>
      </div>
      <div className="w-[45%] max-md:w-[100%] max-md:mt-[5rem]">
        {advantages.map((advantage) => {
          const { title, icon, about } = advantage
          return (
            <div className="flex justify-between mb-[3rem] items-center">
              <div className=" rounded-full bg-[rgba(50,185,206,0.15)] h-fit w-fit p-[1.5rem]">
                <img src={icon} alt="star" className="w-[30px] h-[30px]" />
              </div>
              <div className="w-[82%] max-md:ml-[2rem]">
                <h4 className=" font-semibold mb-[1rem] text-[1.8rem]">
                  {title}
                </h4>
                <p className="text-gray-400">{about}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="absolute h-[1000px] w-[500px] rounded-full bg-black top-0 left-[-600px] component-gradient2"></div>
    </section>
  )
}

export default Advantages
