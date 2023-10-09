import react from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Senhora from '../../../assets/Senhora.png'

const NavBar = ( ) => {
  return (
    <div className={`mt-16 md:mt-36 p-4`}>
      <div className="text-center">
        <p className={`${styles.color_primary} text-lg font-semibold md:font-medium`}>Na <span className={`${styles.color_fifhty} font-bold`}>Marca</span><span className={`font-bold`}>Nutri</span>, Temos</p>
        <p className={`${styles.color_fifhty} text-2xl md:text-5xl font-semibold mb-1`}>Saúde com especialistas</p>
        <p className={`${styles.color_forth} text-base font-semibold md:font-medium md:text-xl`}>Consulte com os Melhores Profissionais da área de nutrição da cidade</p>
      </div>

    </div>
  )
}

export default NavBar
