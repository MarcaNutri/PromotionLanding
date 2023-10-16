import react, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Nutricionista from '../../../assets/parceiro.png'
import Nutricionista1 from '../../../assets/rafaela.png'
import Nutricionista2 from '../../../assets/natalia.png'
import Logo from '../../../assets/MarcaNutri.svg'
import Check from '../../../assets/checkgreen.svg'
import SmallCheck from '../../../assets/smallcheck.svg'
import WhatsApp from '../../../assets/whatsapp.svg'
import ReactGA from 'react-ga';

const Partiner = () => {
  const [screenSize, setScreenSize] = useState()

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  useEffect(() => {
    ReactGA.pageview(window.location.pathname)

    setScreenSize(window?.innerWidth)
    // Adicionar um ouvinte de redimensionamento
    window.addEventListener('resize', updateScreenSize)

    // Remover o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  const openWhatsApp = (phoneNumber, name) => {

    ReactGA.event({
      category:'Agendamento',
      action:'click',
      label:name
    })

    const message = encodeURIComponent('Olá, obtive seu contato através do site MarcaNutri, gostaria de marcar uma consulta.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl);
  };

  return (
    <div id="partiner" className={`p-4 mb-16`}>
      <div className="flex justify-center mt-8 mb-16 md:my-28">
        <p
          className={`${styles.color_fifhty} text-2xl md:text-5xl font-semibold`}
        >
          Parceiros da
        </p>
        <Image
          src={Logo}
          width={screenSize < 767 ? 140 : 230}
          alt="MarcaNutri"
          className="ml-3"
        />
      </div>

      <div
        className={`m-auto ${styles.container} flex flex-wrap justify-evenly items-center`}
      >
        {/* primeira nutri */}

        <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista1}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 10554P</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 190,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Rafaela Ratto
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
                          Nutricionista clínica com atuação na área esportiva e comportamental. 2 anos de atuação no
              mercado, dentro desses dois anos trabalhando ativamente com emagrecimento e mudança de
              hábitos para mulheres.
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 10554P
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              R$: 190,00
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              Rua Andrade Neves 2998, Pelotas
            </p>

            <div className="block md:hidden">
              <div className="flex flex-col justify-center">
                <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                  Especialidades
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Esportiva
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Comportamental
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Funcional
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53984452760", 'Rafaela Ratto')}}>
                <Image src={WhatsApp} width={33} alt="email" className="mr-2" />{' '}
                Atendimento
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <p className={`text-xs md:text-base font-semibold mb-2`}>
              Especialidades
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Esportiva
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Comportamental
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Funcional
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53984452760", 'Rafaela Ratto')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 33}
                alt="email"
                className="mr-1"
              />{' '}
              Atendimento
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} />

        {/* Segunda Nutri */}

        <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista2}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 11347P</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 120,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Natalia Farias
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
              Sou Nutricionista formada pela Universidade
              Federal de Pelotas (UFPEL).
              Atualmente trabalho com a nutrição clínica e
              esportiva num intuíto de proporcionar saúde
              através de uma alimentação adequada e simples!
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 11347P
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              R$: 120,00 - uma consulta
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              Gonçalves chaves 4721, Pelotas
            </p>

            <div className="block md:hidden">
              <div className="flex flex-col justify-center">
                <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                  Especialidades
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Esportiva
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Clínica
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53991954110", 'Natalia Farias')}}>
                <Image src={WhatsApp} width={33} alt="email" className="mr-2" />{' '}
                Atendimento
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <p className={`text-xs md:text-base font-semibold mb-2`}>
              Especialidades
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Esportiva
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Clínica
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53991954110", 'Natalia Farias')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 33}
                alt="email"
                className="mr-1"
              />{' '}
              Atendimento
            </button>
          </div>
        </div>

        {/* <div className={`${styles.hr_partiner} block md:hidden mb-8`} /> */}
        {/* Terceira Nutri */}

        {/* <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 8321</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 190,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Dra. Renata Silva
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
              Apaixonada pela nutrição e o que ela pode fazer e faz na vida das
              pessoas. Ajudo pessoas a melhorarem sua qualidade de vida,
              recuperarem a autoestima e alcançar o tão esperado objetivo, de
              forma mais fácil, prazerosa e sem sofrimento
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 8321
            </p>

            <div className="block md:hidden">
              <div className="flex flex-col justify-center">
                <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                  Especialidades
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Esporte e Exercício Físico
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Vegetarianismo e Veganismo
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Funcional
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999254275", 'Dra. Renata Silva')}}>
                <Image src={WhatsApp} width={33} alt="email" className="mr-2" />{' '}
                Atendimento
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <p className={`text-xs md:text-base font-semibold mb-2`}>
              Especialidades
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Esporte e Exercício Físico
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Vegetarianismo e Veganismo
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Funcional
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999254275", 'Dra. Renata Silva')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 33}
                alt="email"
                className="mr-1"
              />{' '}
              Atendimento
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} /> */}
        {/* Quarta Nutri */}

        {/* <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 8321</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 190,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Dra. Renata Silva
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
              Apaixonada pela nutrição e o que ela pode fazer e faz na vida das
              pessoas. Ajudo pessoas a melhorarem sua qualidade de vida,
              recuperarem a autoestima e alcançar o tão esperado objetivo, de
              forma mais fácil, prazerosa e sem sofrimento
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 8321
            </p>

            <div className="block md:hidden">
              <div className="flex flex-col justify-center">
                <p className={`text-xs md:text-base font-semibold mb-2 mt-1`}>
                  Especialidades
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Esporte e Exercício Físico
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Vegetarianismo e Veganismo
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Nutrição Funcional
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999254275", 'Dra. Renata Silva')}}>
                <Image src={WhatsApp} width={33} alt="email" className="mr-2" />{' '}
                Atendimento
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <p className={`text-xs md:text-base font-semibold mb-2`}>
              Especialidades
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Esporte e Exercício Físico
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Vegetarianismo e Veganismo
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Nutrição Funcional
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999254275", 'Dra. Renata Silva')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 33}
                alt="email"
                className="mr-1"
              />{' '}
              Atendimento
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} /> */}
      </div>
    </div>
  )
}

export default Partiner
