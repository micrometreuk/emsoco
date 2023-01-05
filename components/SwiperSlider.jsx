import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Image from 'next/image'
import Textra from 'react-textra'




function Hero() {
  return (
    <div>
      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 pt-14">
        <br />
        <h1 className="font text-4xl font-bold tracking-tight  text-gray-100 dark:text-gray-200 sm:text-6xl">
        <Textra effect='scale' 
       duration={3000}
      
      data={[' We are helping hands whenever you are in trouble', ]} />
        </h1>
      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}

function Hero2() {
  return (
    <div>
      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 pt-14">
        <br />
        <h1 className="font text-4xl font-bold tracking-tight  text-gray-100 dark:text-gray-200 sm:text-6xl">
        <Textra effect='flash' 
       duration={3000}
      
      data={['We are by your side wherever you are.', ]} />
        </h1>

      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}










export default function SwiperHero() {
  return (
    <div className="swiper-container">
      <div className="swiper-main">
        <Swiper centeredSlides={true} spaceBetween={30} effect={"fade"} loop={true} zoom={{ maxRatio: 6 }} autoplay={{ delay: 3000, disableOnInteraction: false, }} speed={6000} pagination={{ clickable: true, }} navigation={true} modules={[EffectFade, Autoplay, Pagination, Navigation, Zoom]} className="mainSwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}>
          <SwiperSlide className="mbg-no-repeat bg-cover bg-center	bg-[url('../public/bg-sm.webp')] xl:bg-[url('../public/bg.webp')] h-100 max-h-full " >
            <div className="pt-10 container h-screen ">
              <Hero />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-no-repeat bg-cover bg-center	bg-[url('../public/bg-slider1-layer2.webp')] xl:bg-[url('../public/bg-slider1-layer2.webp')] h-100 max-h-full">
            <div className="pt-80 container h-screen">
              <Hero2 />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <style jsx>{`
            `}</style>
      <style jsx global>{`
                #app {
                    height: 100%;
                }
                html,
                body {
                    position: relative;
                    height: 100%;
                }

                body {
                    background: #eee;
                    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                    color: #000;
                    margin: 0;
                    padding: 0;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
    </div>
  );
}