import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Textra from 'react-textra'


export function HeroAnima1() {
  const [replay, setReplay] = useState(true);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-16 bg-cover bg-clip-text bg-center text-transparent  font-extrabold tracking-wide antialiased text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center italic leading-tight " style={{ backgroundImage: "url(https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif)" }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center   font-bold italic leading-tight">
        Welcome to Emso and Co
        <br />
        Emso and Co Solicitors
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <button className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Contact us today</button>
      </div>
    </>
  );
}


export function HeroAnima2() {
  return (
      <div className="flex flex-col justify-center items-center mt-2 bg-cover bg-clip-text bg-center text-transparent  tracking-wide antialiased  " style={{ backgroundImage: "url(https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif)" }}>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center ">
          We are helping hands 
          whenever you are in trouble
        </h3>
      </div>
  );
}


function Hero2() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-2 bg-cover bg-clip-text bg-center text-transparent   tracking-wide antialiased  text-center italic leading-tight " style={{ backgroundImage: "url(https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif)" }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold italic leading-tight">
          <Textra effect='press'
            duration={3000}
            data={['We are by your side wherever you are.',]} 
            />
        </h1>
      </div>
    </div>
  );
}










export default function Landing() {
  return (
    <div className="swiper-container">
      <div className="swiper-main">
        <Swiper centeredSlides={true} spaceBetween={30} effect={"fade"} loop={true} zoom={{ maxRatio: 6 }} autoplay={{ delay: 3000, disableOnInteraction: false, }} speed={6000} navigation={false} modules={[EffectFade, Autoplay, Pagination, Navigation, Zoom]} className="mainSwiper"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}>
          <SwiperSlide className="mbg-no-repeat bg-cover bg-center	bg-[url('../public/bg-sm.webp')] xl:bg-[url('../public/bg.webp')] h-100 max-h-full " >
            <div className="pt-20 container h-screen ">
              <HeroAnima1 />
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-no-repeat bg-cover bg-center	bg-[url('../public/bg-slider1-layer2.webp')] xl:bg-[url('../public/bg-slider1-layer2.webp')] h-100 max-h-full">
            <div className="pt-80 container h-screen">
              <HeroAnima2 />
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