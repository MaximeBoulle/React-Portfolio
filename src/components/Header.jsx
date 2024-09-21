import React from 'react'
import reactLogo from "../assets/images/React_logo.png"
import tailwindLogo from "../assets/images/tailwind_logo.svg"
import vitejsLogo from "../assets/images/vitejs_logo.png"
import bg from "../assets/images/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Maxime Boulle</h1>
        <div className='text-white py-4 max-w-lg '>
          <p className='mb-1'>I'm a new passionated developper, I'm in the 4th year of engineering school. I'm in the Software Engineering major and I'm looking for an intership of 5 months 
            <span className='underline font-semibold bg-gradient-to-r bg-clip-text text-transparent  from-orange-500 via-purple-500 to-yellow-500'> (04/11/2024 - 04/04/2025)</span>
          </p>
          <p>I did this portfolio with ViteJS, React and Tailwind</p>
        </div>
        <button className='  text-white text-2xl ease-out duration-75 hover:translate-x-5'><a href="#contact">Let's Connect</a><i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
      
      <div className="reactlogo scale-150 lg:hidden absolute w-[300px] flex ">
      <img src={reactLogo} alt="" />
      </div>

      <div className="tailwindlogo lg:hidden absolute w-[300px] flex ">
      <img src={tailwindLogo} alt="" />
      </div>
      
      <div className="vitejslogo lg:hidden absolute w-[300px] flex ">
      <img src={vitejsLogo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header