import Image from 'next/image'
import Header from '../components/Header/index'
import About from '../components/About/index'

import 'tailwindcss/tailwind.css';

const home = () => {
  return (
    <>
      <Header/>
      <About/>
      <div className="mt-32">

      </div>
    </>
  )
}

export default home
