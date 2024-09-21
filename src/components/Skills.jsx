import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className=" h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className=" text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl font-bold">Hard Skills</h1>
          <div className=" flex justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">80%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">ReactJS</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">65%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">VueJS</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">90%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">TailwindCSS</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">85%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">JS</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">90%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">Python</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">85%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">Java</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className="bg-[#171717]">
                <div className="relative">
                  <div className="relative bg-[#171717]">
                      <img src={img} alt="" className="w-full"></img>
                      <h1 className="absolute inset-0 flex justify-center items-center font-bold text-4xl text-white">60%</h1>
                  </div>
                  <h1 className="font-bold text-2xl my-2 text-center">C</h1>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
