import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Image from 'next/image'
import Textra from 'react-textra'
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { RotateCcw } from "react-feather";
import { FC } from "react";

function WavyText({
  text, delay = 0, duration = 0.05, replay, ...props
}) {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay, }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: "Infinity",
        duration: 4,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        repeat: "Infinity",
        duration: 3,
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.h1
      style={{
        display: "flex",
        overflow: "hidden",
        color: "#fff",
        fontSize: 50,
      }}
      variants={container}
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}



export function HeroAnima1() {
  const [replay, setReplay] = useState(true);
  return (
    <main>
      <div className="main-text">
        <WavyText text="Welcome to Emso & Co" replay={replay} />
      </div>
      <style jsx>{`
    main{
    }
    .main-text{
      font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
    }
    `}</style>
    </main>
  );
}


export function HeroAnima2() {
  const [replay, setReplay] = useState(true);
  return (
    <main>
      <div className="main-text">
        <WavyText text="We are trully Global" replay={replay} />
      </div>
      <style jsx>{`
    main{
    }
    .main-text{
      padding-top: 1rem;
      font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    }
    `}</style>
    </main>
  );
}




function Hero() {
  return (
    <div>
      <div className="w-11/12 sm:w-2/3 mb-2 sm:mb-10 pt-14">
        <h1 className="font text-2xl  tracking-tight  text-gray-100 dark:text-gray-200 sm:text-6xl">
        <Textra effect='press' 
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
        <h1 className="font text-2xl tracking-tight text-gray-100 dark:text-gray-200 sm:text-6xl">
        <Textra effect='rightLeft' 
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
            <div className="pt-20 container h-screen ">
              <HeroAnima1/>
              <Hero/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-no-repeat bg-cover bg-center	bg-[url('../public/bg-slider1-layer2.webp')] xl:bg-[url('../public/bg-slider1-layer2.webp')] h-100 max-h-full">
            <div className="pt-80 container h-screen">
              <HeroAnima2/>
              <Hero2/>
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