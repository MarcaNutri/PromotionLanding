'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Style from './style.module.scss';

//Components
import ButtonElement from '@/components/formElements/button';
import Footer from '@/components/layoutComponents/footer';
import NavBar from '@/components/layoutComponents/navBar';

//IMAGES

//Header
import NutriHeader from '@public/assets/Home/NutriHeader.png';
import Clock from '@public/assets/Home/clock.svg';
import stethoscope from '@public/assets/Home/stethoscope.svg';
import marcanutri from '@public/assets/marcanutri.svg';

//Partiner
import Nutricionista1 from '@public/assets/Home/rafaela.png';
import Nutricionista2 from '@public/assets/Home/natalia.png';
import Nutricionista3 from '@public/assets/Home/Bruna.png';
import Check from '@public/assets/Home/CheckWhite.svg';
import CheckGreen from '@public/assets/Home/checkgreen.svg';
import logoWhite from '@public/assets/marcaNutriWhite.svg';
import WhatsApp from '@public/assets/Footer/whatsapp.svg';

//General
import LogoRounded from '@public/assets/Home/logoRounded.svg';
import LogoRoundedGreen from '@public/assets/Home/logoRoundedGreen.svg';
import LocationWhite from '@public/assets/locationWhite.svg';
import RoundedImage from '@public/assets/Home/roundedImages.png';

const Home = () => {
  const [screenSize, setScreenSize] = useState<any>();

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    setScreenSize(window?.innerWidth);
    // Adicionar um ouvinte de redimensionamento
    window.addEventListener('resize', updateScreenSize);

    // Remover o ouvinte de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const openWhatsApp = (name: string) => {

    const message = encodeURIComponent(`Olá, obtive seu contato através do site MarcaNutri e gostaria de marcar uma consulta com a ${name}.`);
    const whatsappUrl = `https://wa.me/${'5553999254275'}?text=${message}`;
    window.open(whatsappUrl);
  };

  const scrollToElement = (elementId:string) => {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <header className={`${Style.container_header}`}>
          <NavBar />
          <div className="max-w-[88rem] lg:max-w-[120rem] m-auto">
            <div className="px-2 md:p-8 lg:p-12">
              <h1
                className={`${Style.title} ${Style.primary_color} text-3xl md:text-6xl lg:text-8xl`}
              >
                O bom da vida é estar bem!
              </h1>
              <p
                className={`${Style.paragraph} ${Style.primary_color} text-base md:text-xl lg:text-xl`}
              >
                Encontre aqui os melhores nutricionistas de Pelotas próximos a
                você e agende sua consulta.
              </p>

              <ButtonElement
                size="large"
                styleButton="round"
                text="Agende uma consulta"
                classProp="mt-20 mb-20 md:mb-0 lg:mb-0"
                onClick={() => scrollToElement('partner')}
              />
            </div>
          </div>

          <div className={`${Style.header_line}`}>
            <div className="max-w-[88rem] lg:max-w-[112rem] m-auto w-ful relative p-2 md:p-6 lg:p-6">
              <div className={`${Style.tips_container}`}>
                {/* sessão de tips */}
                <div className={`${Style.tips_header} mr-4`}>
                  <div className={`${Style.tips_icon}`}>
                    <Image src={Clock} width={33} alt="Logo" />
                  </div>
                  <h4 className={`${Style.tips_title}`}>Agendamento Rápido</h4>
                  <div className={`${Style.tips_line}`} />
                  <p>
                    Marque sua consulta online em minutos, sem complicações.
                  </p>
                </div>

                <div className={`${Style.tips_header}`}>
                  <div className={`${Style.tips_icon}`}>
                    <Image src={stethoscope} width={33} alt="Logo" />
                  </div>
                  <h4 className={`${Style.tips_title}`}>Agendamento Rápido</h4>
                  <div className={`${Style.tips_line}`} />
                  <p>
                    Transforme seu bem-estar com orientação nutricional
                    personalizada.
                  </p>
                </div>
              </div>

              <Image
                src={NutriHeader}
                width={800}
                alt="nutri"
                className={`hidden ${Style.nutri_image} lg:flex`}
              />
            </div>
          </div>
        </header>
        {/*Final Header */}

        <section className="max-w-[88rem] lg:max-w-[100rem] m-auto mt-20 md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6">
          <div className="text-center">
            <p className={`${Style.primary_color} text-lg md:font-medium`}>
              Na
              <span className={`${Style.success_color} text-lg font-bold`}>
                {' '}
                Marca
              </span>
              <span className={`${Style.primary_color}  text-lg font-bold`}>
                Nutri
              </span>
              , Temos
            </p>
            <p
              className={`${Style.success_color} text-2xl md:text-5xl font-semibold mb-1`}
            >
              Saúde com especialistas
            </p>
            <p
              className={`${Style.secundary_color} text-base font-semibold md:font-medium md:text-xl`}
            >
              Consulte com os Melhores Profissionais da área de nutrição da
              cidade
            </p>
          </div>

          <h3
            className={`${Style.title} ${Style.black_color} text-4xl mt-20 mb-8 md:text-5xl lg:text-5xl lg:mt-24 lg:mb-8`}
          >
            Nossas especialidades
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <div className={`${Style.container_specialty}`}>
              <Image
                src={LogoRounded}
                alt="logo"
                className={`${Style.container_specialty_logo}`}
              />
              <p
                className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}
              >
                Educação alimentar
              </p>
              <p
                className={`${Style.paragraph} font-normal text-sm md:font-medium`}
              >
                Transforme sua vida com escolhas saudáveis, descubra o poder do
                conhecimento nutricional!
              </p>
            </div>
            <div
              className={`${Style.container_specialty} ${Style.container_specialty_green}`}
            >
              <Image
                src={LogoRoundedGreen}
                alt="logo"
                className={`${Style.container_specialty_logo}`}
              />
              <p
                className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}
              >
                Educação nutricional
              </p>
              <p
                className={`${Style.paragraph} font-normal text-sm md:font-medium`}
              >
                Desperte seu potencial de bem-estar através do conhecimento
                alimentar.
              </p>
            </div>
            <div className={`${Style.container_specialty}`}>
              <Image
                src={LogoRounded}
                alt="logo"
                className={`${Style.container_specialty_logo}`}
              />
              <p
                className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}
              >
                Nutrição Clínica
              </p>
              <p
                className={`${Style.paragraph} font-normal text-sm md:font-medium`}
              >
                Cuidado personalizado para uma vida mais saudável. Confie na
                expertise nutricional!
              </p>
            </div>
            <div
              className={`${Style.container_specialty} ${Style.container_specialty_green}`}
            >
              <Image
                src={LogoRoundedGreen}
                alt="logo"
                className={`${Style.container_specialty_logo}`}
              />
              <p
                className={`${Style.paragraph} font-bold text-base md:text-2xl lg:text-2xl`}
              >
                Nutrição em saúde da mulher
              </p>
              <p
                className={`${Style.paragraph} font-normal text-sm md:font-medium`}
              >
                Empodere sua saúde feminina com escolhas nutricionais
                conscientes.
              </p>
            </div>
          </div>
        </section>

        {/* PARTINERS */}
        <section className={`${Style.container_partiner} text-white`} id="partner">
          <div className="max-w-[88rem] lg:max-w-[100rem] m-auto mt-20 md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6 flex flex-wrap justify-center items-center">
            <div className="flex">
              <h3
                className={`${Style.paragraph} text-center lg:text-5xl flex items-center mb-8 md:mb-16 m-auto`}
              >
                Parceiros da{' '}
                <Image
                  src={logoWhite}
                  width={screenSize < 767 ? 83 : 262}
                  alt="MarcaNutri"
                  className="ml-3 mr-3 mb-2"
                />{' '}
                Pelotas
              </h3>
            </div>

            {/* Container partiners */}
            <div className="flex flex-wrap itens-center justify-center gap-2.5 md:gap-6 lg:gap-6">
              <div>
                <div className={`flex mb-8 md:mb-16`}>
                  <div style={{ minWidth: '83px' }}>
                    <Image
                      src={Nutricionista2}
                      width={screenSize < 767 ? 83 : 198}
                      alt="nutricionista"
                    />
                      <p className={`text-sm lg:text-xl font-semibold block mt-2`}>
                      R$ 120,00
                    </p>
                  </div>

                  <div className="mr-3 ml-3">
                    <p className={` text-base md:text-2xl font-semibold`}>
                      Natalia Farias{' '}
                      <span className="text-sm">- CRN: 11347P</span>
                    </p>
                    <p
                      className={`text-xs md:text-base ${Style.text_container} mt-2 mb-2`}
                    >
                      Sou Nutricionista formada pela UFPEL. Atualmente trabalho
                      com a nutrição clínica e esportiva...
                    </p>
                    <p
                      className={`text-xs md:text-base font-semibold hidden md:block ${Style.text_container} flex cursor-pointer`}
                      style={{ display: 'flex' }}
                    >
                      <Image
                        src={LocationWhite}
                        width={screenSize < 767 ? 14.8 : 25}
                        alt="icone de localização"
                        className="mr-1"
                      />{' '}
                      Endereço: Rua Andrade Neves 2998, Pelotas
                    </p>

                    <button
                      className={`hidden md:flex ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Natalia Farias')}
                    >
                      <Image
                        src={WhatsApp}
                        width={30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                    </button>

                    <div className="block md:hidden">
                      <div className="flex flex-col justify-center">
                        <p
                          className={`text-xs md:text-base font-semibold mb-2 mt-1`}
                        >
                          Especialidades
                        </p>
                        <p
                          className={`flex items-center text-xs md:text-base mb-1`}
                        >
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Esportiva
                        </p>
                        <p
                          className={`flex items-center text-xs md:text-base mb-1`}
                        >
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Clínica
                        </p>
                      </div>
                    </div>

                    <button
                      className={`flex md:hidden lg:hidden ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Natalia Farias')}
                    >
                      <Image
                        src={WhatsApp}
                        width={screenSize < 767 ? 20 : 30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                    </button>
                  </div>

                  <div className="hidden md:block">
                    <p className={`text-xs md:text-base font-semibold mb-2`}>
                      Especialidades
                    </p>
                    <p
                      className={`flex items-center text-xs md:text-base mb-2`}
                    >
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Esportiva
                    </p>
                    <p
                      className={`flex items-center text-xs md:text-base mb-2`}
                    >
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Clínica
                    </p>

                  </div>
                </div>
              </div>

              <div>
                <div className={`flex mb-8 md:mb-16`}>
                  <div style={{ minWidth: '83px' }}>
                    <Image
                      src={Nutricionista3}
                      width={screenSize < 767 ? 83 : 198}
                      alt="nutricionista"
                    />
                    <p className={`text-sm lg:text-xl font-semibold block mt-2`}>
                      R$ 190,00
                    </p>
                  </div>

                  <div className="mr-3 ml-3">
                    <p className={` text-base md:text-2xl font-semibold`}>
                      Bruna Padilha{' '}
                      <span className="text-sm">- CRN: 17216</span>
                    </p>
                    <p
                      className={`text-xs md:text-base ${Style.text_container} mt-2 mb-2`}
                    >
                      Nutricionista desde 2019, já acompanhei centenas de
                      pessoas durante esse tempo...
                    </p>
                    <p
                      className={`text-xs md:text-base font-semibold hidden md:block ${Style.text_container} flex cursor-pointer`}
                      style={{ display: 'flex' }}
                    >
                      <Image
                        src={LocationWhite}
                        width={screenSize < 767 ? 14.8 : 25}
                        alt="icone de localização"
                        className="mr-1"
                      />{' '}
                      Endereço: Rua Major de Góes Monteiro Cícero, 164 - sala
                      302
                    </p>
                    <button
                      className={`hidden md:flex ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Bruna Padilha')}
                    >
                      <Image
                        src={WhatsApp}
                        width={30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                    </button>

                    <div className="block md:hidden">
                      <div className="flex flex-col justify-center">
                        <p
                          className={`text-xs md:text-base font-semibold mb-2 mt-1`}
                        >
                          Especialidades
                        </p>
                        <p
                          className={`flex items-center text-xs md:text-base mb-1`}
                        >
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Esporte e exercício físico
                        </p>
                        <p
                          className={`flex items-center text-xs md:text-base mb-1`}
                        >
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Vegetarianismo e veganismo
                        </p>
                        <p
                          className={`flex items-center text-xs md:text-base mb-1`}
                        >
                          <Image
                            src={Check}
                            width={screenSize < 767 ? 10.8 : 20}
                            alt="Check - icon"
                            className="mr-1 md:mr-2"
                          />
                          Nutrição Funcional
                        </p>
                      </div>
                    </div>
                    <button
                      className={`flex md:hidden lg:hidden ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Bruna Padilha')}
                    >
                      <Image
                        src={WhatsApp}
                        width={screenSize < 767 ? 20 : 30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                    </button>
                  </div>

                  <div className="hidden md:block">
                    <p className={`text-xs md:text-base font-semibold mb-2`}>
                      Especialidades
                    </p>
                    <p
                      className={`flex items-center text-xs md:text-base mb-2`}
                    >
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Esporte e exercício físico
                    </p>
                    <p
                      className={`flex items-center text-xs md:text-base mb-2`}
                    >
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Vegetarianismo e veganismo
                    </p>
                    <p
                      className={`flex items-center text-xs md:text-base mb-2`}
                    >
                      <Image
                        src={Check}
                        width={screenSize < 767 ? 10.8 : 20}
                        alt="Check - icon"
                        className="mr-1 md:mr-2"
                      />
                      Nutrição Funcional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={`flex mb-8 md:mb-16`}>
                <div style={{ minWidth: '83px' }}>
                  <Image
                    src={Nutricionista1}
                    width={screenSize < 767 ? 83 : 198}
                    alt="nutricionista"
                  />
                  <p className={`text-sm lg:text-xl font-semibold block mt-2`}>
                    R$ 190,00
                  </p>
                </div>

                <div className="mr-3 ml-3">
                  <p className={` text-base md:text-2xl font-semibold`}>
                    Rafaela Ratto <span className="text-sm">- CRN: 10554P</span>
                  </p>
                  <p
                    className={`text-xs md:text-base ${Style.text_container} mt-2 mb-2`}
                  >
                    Nutricionista clínica com atuação na área esportiva e
                    comportamental. 2 anos de atuação no mercado...
                  </p>
                  <p
                    className={`text-xs md:text-base font-semibold hidden md:block ${Style.text_container} flex cursor-pointer`}
                    style={{ display: 'flex' }}
                  >
                    <Image
                      src={LocationWhite}
                      width={screenSize < 767 ? 14.8 : 25}
                      alt="icone de localização"
                      className="mr-1"
                    />{' '}
                    Endereço: Rua Major de Góes Monteiro Cícero, 164 - sala 302
                  </p>

                  <button
                      className={`hidden md:flex ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Rafaela Ratto')}
                    >
                      <Image
                        src={WhatsApp}
                        width={30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                  </button>

                  <div className="block md:hidden">
                    <div className="flex flex-col justify-center">
                      <p
                        className={`text-xs md:text-base font-semibold mb-2 mt-1`}
                      >
                        Especialidades
                      </p>
                      <p
                        className={`flex items-center text-xs md:text-base mb-1`}
                      >
                        <Image
                          src={Check}
                          width={screenSize < 767 ? 10.8 : 20}
                          alt="Check - icon"
                          className="mr-1 md:mr-2"
                        />
                       Nutrição Esportiva
                      </p>
                      <p
                        className={`flex items-center text-xs md:text-base mb-1`}
                      >
                        <Image
                          src={Check}
                          width={screenSize < 767 ? 10.8 : 20}
                          alt="Check - icon"
                          className="mr-1 md:mr-2"
                        />
                        Nutrição Comportamental
                      </p>
                      <p
                        className={`flex items-center text-xs md:text-base mb-1`}
                      >
                        <Image
                          src={Check}
                          width={screenSize < 767 ? 10.8 : 20}
                          alt="Check - icon"
                          className="mr-1 md:mr-2"
                        />
                        Nutrição Funcional
                      </p>
                    </div>
                  </div>
                  <button
                      className={`flex md:hidden lg:hidden ${Style.whats_button} mt-2 hover:brightness-90 ease-in-out duration-200 mt-9`}
                      onClick={() => openWhatsApp('Rafaela Ratto')}
                    >
                      <Image
                        src={WhatsApp}
                        width={screenSize < 767 ? 20 : 30}
                        alt="email"
                        className="mr-3"
                      />{' '}
                      Agendar consulta
                  </button>
                </div>

                <div className="hidden md:block">
                  <p className={`text-xs md:text-base font-semibold mb-2`}>
                    Especialidades
                  </p>
                  <p className={`flex items-center text-xs md:text-base mb-2`}>
                    <Image
                      src={Check}
                      width={screenSize < 767 ? 10.8 : 20}
                      alt="Check - icon"
                      className="mr-1 md:mr-2"
                    />
                    Nutrição Esportiva
                  </p>
                  <p className={`flex items-center text-xs md:text-base mb-2`}>
                    <Image
                      src={Check}
                      width={screenSize < 767 ? 10.8 : 20}
                      alt="Check - icon"
                      className="mr-1 md:mr-2"
                    />
                    Nutrição comportamental
                  </p>
                  <p className={`flex items-center text-xs md:text-base mb-2`}>
                    <Image
                      src={Check}
                      width={screenSize < 767 ? 10.8 : 20}
                      alt="Check - icon"
                      className="mr-1 md:mr-2"
                    />
                    Nutrição Funcional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final partiners section */}

        <section
          className="max-w-[88rem] flex items-center flex-wrap justify-center
          m-auto mt-20 flex-col-reverse lg:flex-row gap-6
          lg:justify-between md:mt-40 lg:mt-40 p-2 md:p-6 lg:p-6 lg:max-w-[100rem]"
        >
          <div className={`${Style.primary_color} ${Style.paragraph}`}>
            <h2 className="text-base font-bold mb-4 md:text-3xl">
              A melhor rede de especialista em nutrição você encontra aqui
            </h2>
            <div className="flex flex-wrap gap-4 text-xs mb-4 lg:mr-4">
              <div>
                <p className="flex font-bold mb-2 lg:text-2xl">
                  <Image
                    src={CheckGreen}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Agendamento personalizado
                </p>
                <p className="font-light lg:text-xl">
                  Diga adeus às longas esperas{' '}
                </p>
              </div>
              <div>
                <p className="flex font-bold mb-2 lg:text-2xl">
                  <Image
                    src={CheckGreen}
                    width={screenSize < 767 ? 10.8 : 20}
                    alt="Check - icon"
                    className="mr-1 md:mr-2"
                  />
                  Acesso rápido e fácil
                </p>
                <p className="font-light w-60 lg:text-xl">
                  Esteja sempre em dia com sua saúde monitorando com apenas um
                  click sua evolução.
                </p>
              </div>
            </div>
            <ButtonElement
              text="Agendar Agora"
              size="large"
              styleButton="rounded"
              onClick={() => scrollToElement('partner')}
            />
          </div>
          <Image
            src={RoundedImage}
            width={screenSize < 767 ? 320 : 520}
            alt="Check - icon"
            className="mr-1 md:mr-2"
          />
        </section>
        <section className="flex justify-center items-center flex-col mt-40">
          <Image src={marcanutri} width={screenSize < 767 ? 226 : 561} alt="marcanutri" />
          <p
            className={`${Style.primary_color} text-center lg:text-4xl font-bold`}
          >
            Não espere mais para cuidar da sua saúde e bem-estar!
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
