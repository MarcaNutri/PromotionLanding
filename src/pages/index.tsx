import Image from 'next/image'
import Header from '../components/Header/index'
import About from '../components/About/index'
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
