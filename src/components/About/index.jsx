import react, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Senhora from '../../../assets/Senhora.png'
import LogoSimple from '../../../assets/logo-small.png'
import Nutri from '../../../assets/nutri.png'

const NavBar = ( ) => {

  const [screenSize, setScreenSize] = useState()

  return (
    <div className={`mt-16 md:mt-36 p-4`}>
      <div className="text-center">
        <p className={`${styles.color_primary} text-lg md:font-medium`}>Na
          <span className={`${styles.color_fifhty} ${styles.secundary_font} text-4xl`}> Marca</span>
          <span className={` ${styles.secundary_font} text-4xl`}>Nutri</span>, Temos
        </p>
        <p className={`${styles.color_fifhty} text-2xl md:text-5xl font-semibold mb-1`}>Saúde com especialistas</p>
        <p className={`${styles.color_forth} text-base font-semibold md:font-medium md:text-xl`}>Consulte com os Melhores Profissionais da área de nutrição da cidade</p>
      </div>
      <div className={`mt-32 m-auto ${styles.container} text-center`}>
        <div className={`${styles.container_element} ${styles.container_element_one}`}>
          <Image src={LogoSimple} width={98} alt="Senhora segurando uma maça" className="m-auto"/>
          <p className={`text-xs lg:text-2xl font-bold m-auto ${styles.color_primary}`}>
            Nutrição Clínica
          </p>
        </div>
        <div className={`${styles.container_element} ${styles.container_element_two}`}>
          <Image src={LogoSimple} width={98} alt="Senhora segurando uma maça" className="m-auto"/>
          <p className={`text-xs lg:text-2xl font-bold m-auto ${styles.color_primary}`}>
            Nutrição Comportamental
          </p>
        </div>
        <div className={`${styles.container_element} ${styles.container_element_thre}`}>
          <Image src={LogoSimple} width={98} alt="Senhora segurando uma maça" className="m-auto"/>
          <p className={`text-xs lg:text-2xl font-bold m-auto ${styles.color_primary}`}>
            Nutrição Esportiva
          </p>
        </div>
        <div className={`${styles.container_element} ${styles.container_element_four}`}>
          <Image src={LogoSimple} width={98} alt="Senhora segurando uma maça" className="m-auto"/>
          <p className={`text-xs lg:text-2xl font-bold m-auto ${styles.color_primary}`}>
            Nutrição Bariátrica
          </p>
        </div>
        <Image src={Senhora} width={612} alt="Senhora segurando uma maça" className="m-auto"/>
      </div>

      <Image src={Nutri} width={340} alt="Nutri" className={`m-auto mt-12 ${styles.showimage}`}/>
    </div>
  )
}

export default NavBar
