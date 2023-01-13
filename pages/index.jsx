import Layout from "../components/layout";
import Hero from "../components/Hero";
import Landing from "../components/Landing";
import About from "../components/About";

export default function Home() {
  return (
    <Layout>
      <Landing/>
      <Hero/>
      <About/>
    </Layout>
  );
}
