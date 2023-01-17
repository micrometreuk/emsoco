import Layout from "../components/layout";
import Landing from "../components/Landing";
import Hero from "../components/Hero";
import About from "../components/About";
import PromoSection from "../components/PromoSection";
import Features from "../components/Features";
import Contact1 from "../components/Contact1";
import Services1 from "../components/Services1";
export default function Home() {
  return (
    <Layout>
      <Landing/>
      <Hero/>
      <About/>
      <PromoSection/>
      <Services1/>
      <Contact1/>
    </Layout>
  );
}
