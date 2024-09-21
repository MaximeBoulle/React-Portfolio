import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
    
      <div className="navbarcon px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full transition-all duration-300">
        <nav className="flex justify-center items-center gap-x-10">
          <h1 className="text-4xl font-bold">Maxime</h1>
          <div>
            <ul className="flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6">
              <li className="ease-out duration-75 px-10 hover:scale-[1.3]">
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li className="ease-out duration-75 px-10 hover:scale-[1.3]">
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              <li className="ease-out duration-75 px-10 hover:scale-[1.3]">
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
            </ul>
          </div>

          <div className="icon text-lg flex gap-4 lg:gap-8 lg:my-10">
            
            <a href="https://www.linkedin.com/in/maxime-boulle-767a67221/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/MaximeBoulle"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <div className="btn">
              <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              <AnchorLink href="#contact">Let's Connect</AnchorLink>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
