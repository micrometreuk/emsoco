import Layout from "../components/layout";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import About from "../components/About";
import PromoSection from "../components/PromoSection";
import Features from "../components/Features";
export default function Home() {
  return (
    <Layout>
      <Landing/>
      <Hero/>
      <About/>
      <Features/>
      <PromoSection/>
    </Layout>
  );
}
