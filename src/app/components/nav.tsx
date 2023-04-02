'use client'
import Link from "next/link"
import { waiting } from "../helpers/waiting"
import { useEffect, useState } from "react"
export default function Navbar () {

    const [isMobile, setIsMobile] = useState(true)

    const determineDevice = () => {
        const width = window.innerWidth;
        if (width <= 708) {
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
        <h1>Charlytoc </h1>
        {isMobile && <MobileMenu />}
        {!isMobile && <DesktopMenu />}
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
        <Link className="button-block" href={`/about`}>About me</Link>
        <Link className="button-block" href={`/project`}>Projects</Link>
        <Link className="button-block" href={`/contact`}>Contact</Link>
    </div>
    </>
}