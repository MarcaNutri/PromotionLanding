import react from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Logo from '../../../assets/MarcaNutri.png'

const Partiner = () => {
  return (
    <div className={``}>
      <Image src={Logo} width={460} alt="MarcaNutri" className="m-auto"/>
      <p className={`${styles.color_primary} ${styles.secundary_font} text-6xl 2xl:text-6xl text-center`}>
        Não espere mais para cuidar da sua saúde e bem-estar!
      </p>
    </div>
  )
}

export default Partiner
