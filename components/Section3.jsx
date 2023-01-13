import React, { useMemo, useRef, useState } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";


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
            transition: { staggerChildren: duration, delayChildren: i * delay, }
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
                fontSize: 40,
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


export default function AnimaText() {
    const [replay, setReplay] = useState(true);
    return (
        <div className="anima-text">
            <div className="main-text">
                <WavyText text="We are by your side wherever you are.'" replay={replay} />
            </div>
            <style jsx>{`
    .anima-text{
  background: #000
    }
    .anima-text{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
    }
    `}</style>
        </div>
    );
}