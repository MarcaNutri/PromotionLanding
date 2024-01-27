'use client'
import React, { useEffect, useState } from "react";
import Style from './style.module.scss'
import Image from "next/image";

//Images
import Logo from '../../../../public/assets/logo-vazado.svg'
import LogoButton from '../../../../public/assets/logo-without-label.svg'
import Menu from '../../../../public/assets/menu.svg'
import Link from "next/link";

interface NavProps {
  ActiveFlg?: (value: boolean) => void
}

const NavBar: React.FC<NavProps> = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return(
    <>
      <div className={`flex justify-center lg:justify-center items-center p-6 m-auto`}>
        <Image src={Logo} width={223} alt="Logo" className="mr-20 mb-3"/>
        <div className={`hidden lg:flex items-center`}>
          <p
            className={`${Style.navbar_item} ${Style.navbar_item_active} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link href="/">
            Home
            </Link>
          </p>
          <p
            className={`${Style.navbar_item} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link href={"/home/partner"}>Para Nutris</Link>
          </p>
          <p
            className={`${Style.navbar_item} hover:brightness-75 ease-in-out duration-200`}
          >
            <Link href={"/home/howItWorks"}>Como funciona</Link>
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
      <div className={`${showMenu ? 'sm:flex md:flex lg:flex' : 'hidden'} w-full justify-center align-items flex-wrap lg:hidden transition-opacity ease-in-out duration-300`}>
          <p
            className={`${Style.navbar_item} ${Style.navbar_item_active} mr-4 hover:brightness-75`}
          >
            Home
          </p>
          <p
            className={`${Style.navbar_item} mr-4 hover:brightness-75 ease-in-out duration-200`}
          >
            <Link href={"home/partner"}>Para Nutris</Link>
          </p>
          <p
            className={`${Style.navbar_item} hover:brightness-75 ease-in-out duration-200`}
          >
           <Link href={"/home/howItWorks"}>Como funciona</Link>
          </p>
      </div>
    </>
  )
}

export default NavBar
