import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Image from 'next/image'
import Textra from 'react-textra'
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="container h-screen mx-auto flex flex-col items-center justify-center">
     <AnimatedTextWord text="animated text with framer-motion" />
      <AnimatedTextCharacter text="animated text with framer-motion" />
    </div>
  );
}

const AnimatedTextCharacter = ({ text }) => {
    const letters = Array.from(text);
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.03, delayChildren: 0.04 * i  },
      }),
    };
  
    const child = {
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          repeat: "Infinity",
          duration: 2,
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
          repeat: "Infinity",
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };
  


function AnimatedTextWord({ text }) {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
          repeat: "Infinity",
          duration: 2,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
          repeat: "Infinity",
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}




function Hero() {
  return (
    <div>
      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10 pt-14">
      <div className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center  text-transparent text-4xl sm:text-7xl font-extrabold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif)" }}>
       We are helping hands whenever you are in trouble
      </div>
        <br />
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
       <div className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center  text-transparent text-4xl sm:text-7xl font-extrabold tracking-wide antialiased" style={{ backgroundImage: "url(https://media.giphy.com/media/l378wcSfS7eXWQgla/giphy.gif)" }}>
      We are by your side wherever you are.
      </div>
 <br />

      </div>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
}










export function SwiperHero() {
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