'use client'
import Link from "next/link"
import { waiting } from "../helpers/waiting"
import { useEffect, useState } from "react"
import logo from './../resources/c-logo.png'
import Image from "next/image"
export default function Navbar () {

    const [isMobile, setIsMobile] = useState(true)

    const determineDevice = () => {
        const width = window.innerWidth;
        if (width <= 768) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      }

    useEffect(()=>{
       determineDevice()
    }, [])

    return <>
    <nav>
        <h1><div className="logo-container"><Image width={50} height={50} style={{alignSelf: 'center', width: '100%', height: '100%'}} src={logo} alt='logo'/></div> Charlytoc </h1>
        <MobileMenu />
        {/* {isMobile && <MobileMenu />}
        {!isMobile && <DesktopMenu />} */}
        <DesktopMenu />
    </nav>
    </>
}


const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return <>
    {
        showMenu && <div className="mobile-drop-menu">
        {waiting.linkedin}
        {waiting.github}
        {waiting.portofolio}
        {waiting.cv}
    </div>
    }
    <div  id="mobile-menu">
    <i onClick={()=> setShowMenu(!showMenu)} className="fa-solid fa-bars icon-button"></i>
    </div>
    </>
}


const DesktopMenu = () => {
    return <>
    <div id="desktop-menu">
        <Link className="button-block" href={`/3000/about`}>About me</Link>
        <Link className="button-block" href={`/project`}>Projects</Link>
        <Link className="button-block" href={`/contact`}>Contact</Link>
        <Link className="button-block" href={`https://www.canva.com/design/DAFYIqfqXP0/FwCvRlI4Y3V3kP-cTkEaMA/view?utm_content=DAFYIqfqXP0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`}>Resume</Link>
    </div>
    </>
}