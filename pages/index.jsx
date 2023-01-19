import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Layout from "../components/layout";
import Landing from "../components/Landing";
import Contact2 from "../components/Contact2";
import Hero from "../components/Hero";
import About from "../components/About";
import PromoSection from "../components/PromoSection";
import Features from "../components/Features";
import Contact1 from "../components/Contact1";
import Services1 from "../components/Services1";
import ServicesTitle from "../components/ServicesTitle";
import FunFacts from "../components/FunFacts";
export default function Home() {
  return (
    <Layout>
      <Landing />
      <div className="flex justify-center items-center bg-black"
        style={{
          zIndex: 1030,
          position: "fixed",
          top: 590,
          right: 0,
          left: 0,
        }}

      >
        <div className="toast toast-end">


          <div className="alert alert-success">
            <Link href="tel:07951867712">
              <a >
            <FaWhatsapp />
                  How can we help ?
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <PromoSection />
      <ServicesTitle />
      <Services1 />
      <FunFacts />
      <Contact1 />
    </Layout>
  );
}
