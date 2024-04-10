'use client';
import React, { useState, useContext } from 'react';
import Style from './style.module.scss';
import Image from 'next/image';

//Images
import Logo from '../../../../public/assets/logo-vazado.svg';
import LogoButton from '../../../../public/assets/logo-without-label.svg';
import Menu from '../../../../public/assets/menu.svg';
import Link from 'next/link';
import { NavigationContext } from '../../../contexts/navegationContext';

interface NavProps {
  ActiveFlg?: (value: boolean) => void;
}

const NavBar: React.FC<NavProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // @ts-ignore
  const { activePage, navigateTo } = useContext(NavigationContext);

  return (
    <>
      <div
        className={`flex justify-between lg:justify-center items-center p-6 m-auto`}
      >
        <Image src={Logo} width={223} alt="Logo" className="mr-10 mb-3" />
        <div className={`hidden lg:flex items-center`}>
          <p
            className={`${Style.navbar_item} ${activePage == 'home' && Style.navbar_item_active} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link
              href="/"
              onClick={() => {
                navigateTo('home');
              }}
            >
              Home
            </Link>
          </p>
          <p
            className={`${Style.navbar_item} ${activePage == 'partner' && Style.navbar_item_active} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link
              href={'/home/partner'}
              onClick={() => {
                navigateTo('partner');
              }}
            >
              Para Nutris
            </Link>
          </p>
          <p
            className={`${Style.navbar_item} ${activePage == 'howItWorks' && Style.navbar_item_active} hover:brightness-75 ease-in-out duration-200`}
          >
            <Link
              href={'/home/howItWorks'}
              onClick={() => {
                navigateTo('howItWorks');
              }}
            >
              Como funciona
            </Link>
          </p>
        </div>
        <Image
          src={Menu}
          width={24}
          alt="Menu"
          className={`flex mt-4 lg:hidden cursor-pointer hover:brightness-75 ease-in-out duration-200`}
          onClick={() => setShowMenu(event => !event)}
        />
      </div>
      <div
        className={`${showMenu ? `${Style.nav_menu}` : 'hidden'} w-full justify-center align-items flex-wrap lg:hidden transition-opacity ease-in-out duration-300`}
      >
        <div className="flex justify-between  items-center p-6">
          <Image src={Logo} width={223} alt="Logo" className="mr-10 mb-3" />
          <Image
            src={Menu}
            width={24}
            alt="Menu"
            className={`flex mt-4 lg:hidden cursor-pointer hover:brightness-75 ease-in-out duration-200`}
            onClick={() => setShowMenu(event => !event)}
          />
        </div>
        <div>
          <p
            className={`${Style.navbar_item} ${activePage == "home" && Style.navbar_item_active} mr-4 hover:brightness-75`}
          >
            <Link
              href="/"
              onClick={() => {
                setShowMenu(false), navigateTo('home');
              }}
            >
              Home
            </Link>
          </p>
          <p
            className={`${Style.navbar_item} ${activePage == "partner" && Style.navbar_item_active} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link
              href={'/home/partner'}
              onClick={() => {
                setShowMenu(false), navigateTo('partner');
              }}
            >
              Para Nutris
            </Link>
          </p>
          <p
            className={`${Style.navbar_item} ${activePage == "howItWorks" && Style.navbar_item_active} hover:brightness-75 ease-in-out duration-200`}
          >
            <Link
              href={'/home/howItWorks'}
              onClick={() => {
                setShowMenu(false), navigateTo('howItWorks');
              }}
            >
              Como funciona
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
