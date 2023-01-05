import Head from "next/head";
import buildData from "../data/data";
import NavBar from "./Navbar";
import Footer from "./Footer";


export default function Layout({ children }) {
  return (
    <div className="section">
      <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:locale" content="en_UK" />
        <link rel="icon" href={buildData.logoUrl} />
        <meta name="description"content={buildData.description}/>
        <meta name="og:title" content={buildData.domainName} />
        <meta name="Emso And Co Solicitors"content={buildData.name}/>
        <title>{buildData.name}</title>
        <meta property="og:site_name" content={buildData.domainName} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}