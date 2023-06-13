'use client'
import Link from "next/link"
import { waiting } from "../helpers/waiting"
import { useEffect, useState } from "react"
import logo from './../resources/c.png'
import Image from "next/image"
export default function Navbar () {


    return <>
    <nav>
        <h1 className="text-gradient"><div className="logo-container "></div> Charlytoc </h1>
        <MobileMenu />
        <DesktopMenu  />
    </nav>
    </>
}

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    return <>
    {
        showMenu && <div className="mobile-drop-menu">
        <Link className="button-block" href={`/3000/about`}>About me</Link>
        <Link className="button-block" href={`/project`}>Projects</Link>
        <Link className="button-block" href={`/3000/contact`}>Contact</Link>
        <Link className="button-block" href={`https://www.canva.com/design/DAFYIqfqXP0/FwCvRlI4Y3V3kP-cTkEaMA/view?utm_content=DAFYIqfqXP0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`}>Resume</Link>
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
        <Link className="button-block  text-gradient" href={`/3000/about`}>About</Link>
        <Link className="button-block text-gradient" href={`/project`}>Projects</Link>
        <Link className="button-block text-gradient" href={`/3000/contact`}>Contact</Link>
        <Link className="button-block text-gradient" href={`https://www.canva.com/design/DAFYIqfqXP0/FwCvRlI4Y3V3kP-cTkEaMA/view?utm_content=DAFYIqfqXP0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`}>Resume</Link>
    </div>
    </>
}