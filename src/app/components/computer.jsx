'use client'
import { useEffect, useState } from "react"

export default function Computer () {
    const [currentSpanIndex, setCurrentSpanIndex] = useState(0);

    useEffect(() => {
        const intervalId = 
        setInterval(() => {
          setCurrentSpanIndex((prevIndex) => prevIndex + 1);
        }, 800);
        return () => clearInterval(intervalId);
      }, []);

      const spans = [
        <span key={0}>Loading environment variables...</span>,
        <span key={1}>Preparing your workspace</span>,
        <span key={2}>Installing dependencies</span>,
        <span key={3}><b className="var-1">Added 132 packages</b></span>,
        <span key={4}>Almost done! Fount 0 vulnerabilities</span>,
        <span key={5}> <br /></span>,
        <span key={6}>$ Hello, I&apos;m <b className="var-1">Charlytoc</b>!</span>,
        <span key={7}>$ Welcome to my <b className="var-3">portfolio</b>!</span>,
        <span key={8}>$ I&apos;m a <b className="var-2">fullstack</b> software <b className="var-3">developer</b></span>,
        <span key={9}>$ web <b className="var-4">designer</b></span>,
        <span key={10}>$ <b className="var-5">AI researcher</b> </span>,
        <span key={11}>$ and <b className="var-4">mentor</b> </span>,
        <span key={12}>$ </span>,
        <span key={13}>$ <b className="var-2">Click</b> the button to <b className="var-1">start</b> exploring</span>,
    ];
    

    return <>
    <div className="computer-container">
        <div className="computer-monitor">
            <div className="screen">
                {spans.map((span, index) => (
                    <span key={index + 2 } className={index <= currentSpanIndex ? 'show' : 'hide'}>
                    {span}
                    </span>
                ))}
            </div>
            
        </div>
        <div className="computer-bottom">
        <div className="button-start"><i className="fa-solid fa-play"></i></div>
        </div>
        <div className="computer-stand"></div>
        <div className="computer-stand-bottom"></div>
    </div>
    </>
}