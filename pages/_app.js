import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvider>
    </ThemeProvider>
  )
}

export default MyApp
