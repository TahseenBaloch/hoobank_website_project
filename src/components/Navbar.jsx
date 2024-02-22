import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { menuLinks } from '../data'
import menuIcon from '../assets/menu.svg'
import closeIcon from '../assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <nav className=" w-[80%] mx-auto flex justify-between items-center h-[8rem]">
      <div className="logo w-[200px]">
        <img src={logo} alt="hoobank logo" className="w-full" />
      </div>
      <ul className="menu-ul hidden md:flex text-white ">
        {menuLinks.map((link) => {
          const { id, name } = link
          return (
            <li
              key={id}
              className="mr-[4rem] font-light tracking-widest hover:text-[rgb(50,185,206)] transition-all"
            >
              <a href="#">{name}</a>
            </li>
          )
        })}
      </ul>
      <div className="md:hidden relative">
        <img
          onClick={() => setToggle(!toggle)}
          src={toggle ? menuIcon : closeIcon}
          alt="menu"
          className="w-[32px] cursor-pointer"
        />
        {toggle || (
          <div className="mobile-menu absolute top-[8rem] right-[0rem] z-20">
            <ul className="menu-ul text-white text-[2rem] font-semibold h-fit p-[2rem] pb-[1rem] rounded-[2rem] mobile-menu-gradient shadow-xl">
              {menuLinks.map((link) => {
                const { id, name } = link
                return (
                  <li key={id} className="font-light tracking-widest mb-[1rem]">
                    <a href="#">{name}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
