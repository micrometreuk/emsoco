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
        <meta name="theme-color" content={process.env.NEXT_PUBLIC_ENV_themeColor}/>
        <meta property="og:locale" content={process.env.NEXT_PUBLIC_ENV_local}  />
        <link rel="icon" href={process.env.NEXT_PUBLIC_ENV_logoUrl} />
        <meta name="description"content={process.env.NEXT_PUBLIC_ENV_description}/>
        <meta name="og:title" content={process.env.NEXT_PUBLIC_ENV_name}/>
        <title> {process.env.NEXT_PUBLIC_ENV_title}</title>
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}