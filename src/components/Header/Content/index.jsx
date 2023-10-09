import react from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Check from '../../../../assets/icon_check.svg'
import Image1 from '../../../../assets/imagem-header-1.png'
import Image2 from '../../../../assets/imagem-header-2.png'

const Content = ( ) => {
  return (
    <div
      className={`flex justify-center md:items-center md:justify-around  lg:justify-around py-4 ${styles.primary_font} ${styles.content_container}`}
    >

      <div className="flex flex-col text-center justify-center md:text-left md:justify-normal">
        <p className={`${styles.secundary_font} text-4xl md:text-7xl `}>O bom da vida é estar bem!</p>
        <p className={`text-base md:text-2xl mb-8 md:mb-16`}>Conectamos paciente que querem ter uma alimentação mais <br/> saudável a nutricionistas qualificados.</p>

        <div className="flex flex-col md:flex-row">

          <div className="mr-7">
            <div className={`flex justify-center md:justify-normal mb-2`}>
              <Image src={Check} width={24} alt="icone - check" className="mr-3 mb-1"/>
              <p className={`text-base font-medium md:font-normal md:text-lg`}> Agendamento personalizado </p>
            </div>
            <p className={`text-base w-60 hidden md:block ${styles.color_tertiary}`}>Diga adeus às longas esperas e filas de espera.</p>

          </div>

          <div>
            <div className={`flex justify-center md:justify-normal mb-2`}>
              <Image src={Check} width={24} alt="icone - check" className="mr-3"/>
              <p className={`text-base font-medium md:font-normal md:text-lg`}> Acesso rápido e fácil </p>
            </div>
            <p className={`text-base w-60 hidden md:block ${styles.color_tertiary}`}>Esteja sempre em dia com sua saúde monitorando com apenas um click sua evolução.</p>

          </div>

        </div>

        <button className={`${styles.call_button} m-auto md:m-0 md:mt-3`}>
          Agende uma consulta
        </button>

      </div>

      <div className={`flex ${styles.images_header} `}>
        <Image src={Image1} width={270} alt="Imagem" className={`mr-5 ${styles.images_header_one}`}/>
        <Image src={Image2} width={270} alt="Imagem" className={`${styles.images_header_two}`}/>
      </div>

    </div>
  )
}

export default Content
