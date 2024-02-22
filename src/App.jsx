import Advantages from './components/Advantages'
import Billing from './components/Billing'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Service from './components/Service'
import { statData } from './data'
import { social } from './data'

const App = () => (
  <>
    <div className="navbar w-full bg-black">
      <Navbar />
    </div>
    <div className="h-fit max-md:h-fit w-full text-white bg-black">
      <Hero />
      <div className="stats flex justify-between w-[80%] mx-auto max-md:flex-col max-md:mt-[5rem]">
        {statData.map((stat) => {
          const { number, name } = stat
          return (
            <div className="flex items-center w-[33.3333%] max-md:w-[100%] max-md:flex-col max-md:my-[3rem]">
              <p className="text-[5rem] max-md:text-[5rem] font-bold">
                {number}
              </p>
              <span className="uppercase max-md:ml-0 ml-[2rem] max-md:text-[2rem] text-[2rem] font-bold gradient-color my-[10rem] max-md:my-[0rem]">
                {name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
    <div className="w-full mx-auto bg-black text-white max-md:pt-[8rem]">
      <Advantages />
    </div>
    <div className="bg-black h-fit pt-[8rem]">
      <Billing />
    </div>
    <div className="bg-black py-[8rem]">
      <Cards />
    </div>
    <div className="bg-black w-full">
      <Reviews />
    </div>
    <div className="bg-black">
      <Service />
    </div>
    <div className="bg-black max-md:pt-[8rem]">
      <Footer />
      <div
        className="w-[80%] mx-auto py-[3rem] flex justify-between items-center border-t
      max-md:flex-col "
      >
        <div>
          <p className="text-gray-400 text-[1.8rem] max-md:text-center max-md:mb-[3rem]">
            Copyright &copy; 2024 Hoobank. All Rights Reserved.
          </p>
        </div>
        <div className="flex max-md:w-full max-md:justify-evenly">
          {social.map((icon) => {
            return (
              <img
                src={icon.img}
                className="ml-[5rem] cursor-pointer max-md:ml-0"
              />
            )
          })}
        </div>
      </div>
    </div>
  </>
)
export default App
