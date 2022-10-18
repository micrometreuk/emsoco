import { useRef } from "react";
import { useInView } from "framer-motion";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
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

export default function App() {
  return (
    <div className="feature-container">
      <Section className="feature-section" >Animate</Section>
      <Section className="feature-section" >Animate</Section>
      <Section className="feature-section" >Animate</Section>
      <Section className="feature-section" >Animate</Section>
      <style jsx>{`

        .feature-container{
          background: #f108a4;
          display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  min-height: 90vh;
        }
.feature-section{

  box-sizing: border-box;
  width: 100%;
  height: 101vh;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 50px;
  background: #ff0055;

}
.section:nth-child(2) {
    background: #f108a4;
  }
  
  .section:nth-child(3) {
    background: #bd19c8;
  }
  
  .section:nth-child(4) {
    background: #0077ff;
  }
  
  .section span {
    display: block;
    transform: translateX(-100px);
    opacity: 0;
  }

      `}</style>


      <style jsx global>{`
        html,
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
