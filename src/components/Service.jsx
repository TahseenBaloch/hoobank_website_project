import React from 'react'

const Service = () => {
  return (
    <section
      className=" justify-between items-center flex w-[80%]
     mx-auto rounded-[3rem] px-[7rem] py-[5rem] bg-gray-gradient
     max-md:flex-col max-md:px-[0rem] max-md:py-[2rem]
     "
    >
      <div className="w-[60%] max-md:w-[80%]">
        <h1 className="text-white text-[4.5rem] font-semibold max-md:text-[3.5rem]">
          Let's try our service now
        </h1>
        <p className="text-gray-400 text-[2rem] my-[2rem]">
          Everything you need to acccept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="w-[30%] max-md:w-full flex justify-center">
        <button className="capitalize py-[2rem] px-[4rem] rounded-[1.5rem] button-gradient text-black font-semibold">
          get started
        </button>
      </div>
    </section>
  )
}

export default Service
