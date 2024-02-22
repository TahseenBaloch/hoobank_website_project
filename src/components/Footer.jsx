import React from 'react'
import logo from '../assets/logo.svg'
import { usefulLinks, community, partner } from '../data'

const Footer = () => {
  return (
    <footer className="flex w-[80%] mx-auto max-md:pb-0 py-[4rem] justify-between max-md:flex-col">
      <div className="w-[40%] max-md:w-full max-md:mb-[5rem]">
        <img src={logo} alt="logo" className="mb-[3rem]" />
        <p className="text-gray-400 text-[1.8rem] w-[80%]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="mb-[5rem]">
        <h5 className="text-center text-white text-[2rem] mb-[2rem]">
          Useful Links
        </h5>
        <ul>
          {usefulLinks.map((link) => (
            <li className="text-gray-400 mb-[1rem] hover:text-white transition-all">
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[5rem]">
        <h5 className="text-center text-white text-[2rem] mb-[2rem] ">
          Community
        </h5>
        <ul>
          {community.map((link) => (
            <li className="text-gray-400 mb-[1rem] hover:text-white transition-all">
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-[5rem]">
        <h5 className="text-center text-white text-[2rem] mb-[2rem]">
          Partners
        </h5>
        <ul>
          {partner.map((link) => (
            <li className="text-gray-400 mb-[1rem] hover:text-white transition-all">
              <a href="#">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
