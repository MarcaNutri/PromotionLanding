import 'styles/globals.css'
import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';

const id = "G-TDJSD87QN1"
ReactGA.initialize(id)

/* eslint-disable */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
