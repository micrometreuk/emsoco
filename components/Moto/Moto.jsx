import Head from 'next/head'
import Image from 'next/image'
import { useRef } from "react";
import { useInView } from "framer-motion";

import styles from './Moto.module.css'


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}className={styles.section}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export function App() {
  return (
    <>
      <Section>We are helping hands whenever you are in trouble</Section>
      <Section>We are by your side wherever you are</Section>
      <Section>We are truly Global</Section>
      <Section>view!</Section>
    </>
  );
}




export default function Moto() {
  return (
    <div className={styles.container}>
        <App/>
    </div>
  )
}
