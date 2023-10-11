import Image from 'next/image'
import Header from '../components/Header'
import About from '../components/About'
import Partiner from '../components/Partiner'
import Footer from '../components/Footer'

import 'tailwindcss/tailwind.css';

const home = () => {
  return (
    <>
      <Header/>
      <About/>
      <Partiner/>
      <Footer/>
    </>
  )
}

export default home
