import react, { useState, useEffect } from 'react'
import styles from './style.module.scss'
import Image from 'next/image'
import Nutricionista from '../../../assets/parceiro.png'
import Nutricionista1 from '../../../assets/rafaela.png'
import Nutricionista2 from '../../../assets/natalia.png'
import Nutricionista3 from '../../../assets/Miriam.png'
import Nutricionista4 from '../../../assets/Bruna.png'
import Nutricionista5 from '../../../assets/suzana.png'
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
            <p className={`text-base font-semibold hidden md:block ${styles.text_container}`}>
              Endereço: Rua Andrade Neves 2998, Pelotas
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
                <Image src={WhatsApp} width={24} alt="email" className="mr-2" />{' '}
                Agendar Consulta
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
                width={screenSize < 767 ? 24 : 26}
                alt="email"
                className="mr-1"
              />{' '}
                Agendar Consulta
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
            <p className={`text-base font-semibold hidden md:block ${styles.text_container}`}>
              Endereço: Gonçalves chaves 4721, Pelotas
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
                <Image src={WhatsApp} width={24} alt="email" className="mr-2" />{' '}
                Agendar Consulta
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
                width={screenSize < 767 ? 24 : 26}
                alt="email"
                className="mr-1"
              />{' '}
              Agendar Consulta
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} />
        {/* Terceira Nutri */}

        <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista3}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 12.620D</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 250,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Mírian Lost
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
            Trabalhei com nutrição clínica,
principalmente com pacientes com Síndrome Metabólica (dislipidemia, hipertensão, diabetes tipo 2
e obesidade) De alguns anos prá cá me dedico às questões da saúde da mulher, envelhecimento e saúde
digestiva e intestinal, sempre com a nutrição integrativa como base.
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 12.620D
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              R$: 250,00
            </p>
            <p className={`text-base font-semibold hidden md:block ${styles.text_container}`}>
            Endereço: Rua General Teles
671/302. - Pelotas
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
                  Nutrição clínica funcional
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Saúde da mulher
                </p>
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Saúde Digestiva e Intestinal.
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53981112727", 'Mírian Lost')}}>
                <Image src={WhatsApp} width={24} alt="email" className="mr-2" />{' '}
                Agendar Consulta
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
              Nutrição clínica funcional
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Saúde da mulher
            </p>
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
              Saúde Digestiva e Intestinal.
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53981112727", 'Mírian Lost')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 26}
                alt="email"
                className="mr-1"
              />{' '}
              Agendar Consulta
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} />

        {/* Quarta Nutri */}

        <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista4}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 17216</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 180,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Bruna Padilha
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
            Nutricionista desde 2019, já acompanhei centenas de pessoas ao longo desse tempo. Meu formato de trabalho é inegociável: proporcionar resultados e autonomia alimentar sem abrir mão dos princípios básicos de saúde e sem corromper minha principal responsabilidade como profissional nutricionista que é resgatar a saúde e aumentar o tempo e qualidade de vida.
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 17216
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              R$: 180,00
            </p>
            <p className={`text-base font-semibold hidden md:block ${styles.text_container}`}>
            Endereço: Rua Major de Góes
Monteiro Cícero, 164 - sala 302
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
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53981101067", 'Bruna Padilha')}}>
                <Image src={WhatsApp} width={24} alt="email" className="mr-2" />{' '}
                Agendar Consulta
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
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53981101067", 'Bruna Padilha')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 26}
                alt="email"
                className="mr-1"
              />{' '}
              Agendar Consulta
            </button>
          </div>
        </div>

        <div className={`${styles.hr_partiner} block md:hidden mb-8`} />

        {/* Quinta Nutri */}

        <div className={`${styles.color_six} flex mb-8 md:mb-16`}>
          <div style={{ minWidth: '83px' }}>
            <Image
              src={Nutricionista5}
              width={screenSize < 767 ? 83 : 198}
              alt="nutricionista"
            />
            <p className={`text-sm font-semibold block md:hidden`}>CRN: 11487P</p>
            <p className={`text-smfont-semibold block md:hidden`}>R$ 150,00</p>
          </div>

          <div className="mr-3 ml-3">
            <p
              className={`${styles.color_fifhty} text-base md:text-2xl font-semibold`}
            >
              Suzana Antiqueira
            </p>
            <p className={`text-xs md:text-base ${styles.text_container}`}>
              Desde o início da minha formação estudo a nutrição voltada ao comportamento alimentar, história e cultura da alimentação. Atualmente trabalho a nutrição clínica com um olhar mais consciente e sustentável.
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              CRN: 11487P
            </p>
            <p className={`text-base font-semibold hidden md:block`}>
              R$: 150,00
            </p>
            <p className={`text-base font-semibold hidden md:block ${styles.text_container}`}>
            Endereço: São José do Norte-RS, rua Miguel Roig, 253
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
                  Comportamento Alimentar
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
                <p className={`flex items-center text-xs md:text-base mb-1`}>
                  <Image
                    src={screenSize < 767 ? SmallCheck : Check}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Cultura da Alimentação
                </p>
              </div>
              <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999903536", 'Suzana')}}>
                <Image src={WhatsApp} width={24} alt="email" className="mr-2" />{' '}
                Agendar Consulta
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
              Comportamento Alimentar
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
            <p className={`flex items-center text-xs md:text-base mb-2`}>
              <Image
                src={screenSize < 767 ? SmallCheck : Check}
                width={screenSize < 767 ? 10.8 : 20}
                alt="Check - icon"
                className="mr-1 md:mr-2"
              />
                Cultura da Alimentação
            </p>
            <button className={`flex ${styles.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200`} onClick={() => {openWhatsApp("53999903536", 'Suzana')}}>
              <Image
                src={WhatsApp}
                width={screenSize < 767 ? 24 : 26}
                alt="email"
                className="mr-1"
              />{' '}
              Agendar Consulta
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Partiner
