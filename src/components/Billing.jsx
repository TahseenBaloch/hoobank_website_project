import React from 'react'
import billImage from '../assets/bill.png'
import appleImage from '../assets/apple.svg'
import googleImage from '../assets/google.svg'

const Billing = () => {
  return (
    <section className="w-[80%] mx-auto flex justify-between max-md:flex-col">
      <div className="w-[50%] z-10 max-md:w-full object-contain ">
        <img src={billImage} alt="paypal" />
      </div>
      <div className="w-[40%] text-white max-md:w-full max-md:mt-[5rem]">
        <h2 className="text-[5rem] font-bold">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-[1.8rem] text-gray-400 my-[3rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil
          quisquam magni debitis, natus perspiciatis ab est! Tempora voluptate
          rerum dolores, beatae obcaecati perspiciatis, libero, numquam officia
          labore quaerat cumque!
        </p>
        <div className="flex w-[100%] justify-evenly">
          <img src={appleImage} alt="apple" />
          <img src={googleImage} alt="google" />
        </div>
      </div>
    </section>
  )
}

export default Billing
