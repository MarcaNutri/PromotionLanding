import react from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Logo from '../../../../assets/Logo-vazado.png'
import Menu from '../../../../assets/menu.svg'
import LogoWhite from '../../../../assets/icon-white.png'

const NavBar = ( ) => {
  return (
    <div className={`w-full lg:w-10/12 md:px-7 mx-auto ${styles.navbar_container}`}>
      <div
        className={`${styles.primary_font}
          rounded-full bg-white w-10/12 px-7 mx-auto md:flex justify-between hidden`
        }
      >
        <Image src={Logo} width={173} alt="Logo - MarcaNutri" className="ml-4 mb-1 cursor-pointer"/>
        <div className="flex items-center">
          <p className={`${styles.color_primary} mx-4 font-bold text-xl cursor-pointer`}>Home</p>
          <p className={`${styles.color_secundary} mx-4 font-medium text-xl cursor-pointer`}>Saúde com especialistas</p>
          <p className={`${styles.color_secundary} mx-4 font-medium text-xl cursor-pointer`}>Parceiros</p>
        </div>
      </div>

      <div className={`flex md:hidden justify-between items-center`}>
        <Image src={LogoWhite} width={132} alt="Logo - MarcaNutri" className="cursor-pointer"/>
        <Image src={Menu} width={24} alt="Menu" className="cursor-pointer"/>
      </div>

    </div>
  )
}

export default NavBar
