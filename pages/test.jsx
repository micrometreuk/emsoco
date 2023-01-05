import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Parallax, Pagination, Navigation, Autoplay, Zoom } from "swiper";
import Image from 'next/image'
import Textra from 'react-textra'
import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { RotateCcw } from "react-feather";
import { FC } from "react";

const WavyText = ({
  text,
  delay = 0,
  duration = 0.05,
  replay,
  ...props
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay,   }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: "Infinity",
        duration: 5,
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
        duration: 5,
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
      fontSize: 90,
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
};



export default function App() {
  const [replay, setReplay] = useState(true);
  return (
    <main>
      <div className="main-text">
        <WavyText text="Awesome Wavy Text!" replay={replay} />
        <button
          onClick={() => {
            setReplay(!replay);
            setTimeout(() => setReplay(true), 600);
          }}
        >
          Replay <RotateCcw />
        </button>
      </div>
      <style jsx>{`
    main{
      background: linear-gradient(
    45deg,
    hsl(272deg 75% 65%) 0%,
    hsl(193deg 100% 50%) 50%,
    hsl(162deg 84% 88%) 100%
  );
    }
    .main-text{
      font-family: "Lexend Deca", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  user-select: none;
    }
    `}</style>
    </main>
  );
}
