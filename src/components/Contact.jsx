import React from "react";
import img from "../assets/images/contact-img.svg";
import "../styles.css";

function Contact() {
  return (
    <>
      <div id="contact" className=" bg-[linear-gradient(90deg,#b004b0,#38097a);] w-full">
        <div className="wrapper flex justify-center  py-16 gap-52 lg:py-12">
          <div className="imgbox lg:hidden contact relative">
            <img className="w-[550px] h-full" src={img} alt="" />
          </div>
          <div className="content-box">
            <h1 className="text-white font-bold text-4xl">Contact</h1>
            <form action="" className="flex flex-col ">
            <div className="flex gap-4 py-2  ">
              <input
                className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 hover:backdrop-brightness-90 duration-75"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="bg-transparent h-14 rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white lg:w-36 hover:backdrop-brightness-90 duration-75"
                type="text"
                placeholder="Company"
              />
            
            </div>
            <div className="flex gap-4  py-4  ">
              <input
                className="bg-transparent h-14  rounded-2xl   border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36 hover:backdrop-brightness-90 duration-75"
                type="email"
                placeholder="Email"
              />
              <input
                className="bg-transparent h-14  rounded-2xl  border-[1px] border-white pl-4 text-white placeholder-white  lg:w-36 hover:backdrop-brightness-90 duration-75"
                type="phone"
                placeholder="Phone"
              />
            </div>
            <textarea
              className="bg-transparent rounded-2xl border-[1px] border-white h-36 pl-4 text-white w-full placeholder-white pt-2 hover:backdrop-brightness-90 duration-75"
              rows={40}
              cols={35}
              placeholder="Message"
            ></textarea>
                <button className="bg-white border-black border-[1] py-[16px] rounded-lg px-8 my-8 w-32 font-bold ease-out duration-75 hover:scale-105">Send</button>
                </form>
          </div>


        </div>

      </div>
    </>
  );
}

export default Contact;
