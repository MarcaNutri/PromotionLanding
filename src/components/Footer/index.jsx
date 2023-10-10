import react, { useState, useEffect} from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Logo from '../../../assets/MarcaNutri.svg'
import LogoBranco from '../../../assets/MarcaNutri-branco.svg'
import Email from '../../../assets/email.svg'
import WhatsApp from '../../../assets/whatsapp.svg'
import Facebook from '../../../assets/facebook.svg'
import Instagram from '../../../assets/instagram.svg'

const Partiner = () => {

  const [screenSize, setScreenSize] = useState();

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    // Adicionar um ouvinte de redimensionamento
    window.addEventListener('resize', updateScreenSize);

    // Remover o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []); // O array vazio garante que o useEffect seja executado apenas uma vez, sem dependências

  return (
    <div className={``}>
      <Image src={Logo} width={screenSize < 1200 ? 230 : 460} alt="MarcaNutri" className="m-auto"/>
      <p className={`${styles.color_primary} ${styles.secundary_font} text-4xl lg:text-6xl text-center`}>
        Não espere mais para cuidar da sua saúde e bem-estar!
      </p>

      <div className={`${styles.footer_border} mt-32 lg:mt-60`}/>
      <div className={`${styles.footer_background} p-4`}>
        <div className={`m-auto ${styles.footer_content} flex flex-col justify-center lg:justify-normal`}>
          <div className={`flex flex-col justify-center lg:justify-normal lg:flex-row lg:items-center lg:justify-between m-auto`}>
            <Image src={LogoBranco} width={260} alt="MarcaNutri"/>
            <div className={`flex flex-col lg:flex-row`}>
              <div className="mr-20">
                <p className="font-semibold">Menu</p>
                <div className={`${styles.footer_line} cursor-pointer`}/>
                <p className={`cursor-pointer`}>Quem somos</p>
                <p className={`cursor-pointer`}>Pra você</p>
              </div>
              <div className="mr-20 mb-6 mt-6 lg:mb-0 lg:mt-0">
                <p className="font-semibold">Links úteis</p>
                <div className={`${styles.footer_line}`}/>
                <p className={`cursor-pointer`}>Politica de Privacidade</p>
                <p className={`cursor-pointer`}>Termos e Condições</p>
                <p className={`cursor-pointer`}>Ajuda e Suporte</p>
              </div>
              <div className="mb-6 lg:mb-0">
                <p className="font-semibold">Fale conosco</p>
                <div className={`${styles.footer_line}`}/>
                <p className="flex mt-2"><Image src={Email} width={28} alt="email" className="mr-2"/> Marcanutri@gmail.com</p>
                <button className={`flex ${styles.whats_button} mt-2`}>
                  <Image src={WhatsApp} width={38} alt="email" className="mr-3"/> Atendimento
                </button>
              </div>
            </div>
          </div>
          <p>Avenida ipsum lorem, 1010 - Pelotas RS CEP 0000-000</p>
          <div className="flex mt-4 mb-4">
            <Image src={Facebook} width={40} alt="facebook" className="mr-2"/>
            <Image src={Instagram} width={40} alt="instagram"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Partiner
