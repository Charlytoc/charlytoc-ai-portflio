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
        <span>Loading environment variables...</span>,
        <span>Preparing your workspace</span>,
        <span>Installing dependencies</span>,
        <span><b className="var-1">Added 132 packages</b></span>,
        <span>Almost done! Fount 0 vulnerabilities</span>,
        <span> <br /></span>,
        <span>$ Hello, I'm <b className="var-1">Charlytoc</b>!</span>,
        <span>$ Welcome to my <b className="var-3">portfolio</b>!</span>,
        <span>$ I'm a <b className="var-2">fullstack</b> software <b className="var-3">developer</b></span>,
        <span>$ web <b className="var-4">designer</b></span>,
        <span>$ <b className="var-5">AI researcher</b> </span>,
        <span>$ and <b className="var-4">mentor</b> </span>,
        <span>$ </span>,
        <span>$ <b className="var-2">Click</b> the button to <b className="var-1">start</b> exploring</span>,
      ];
    

    return <>
    <div className="computer-container">
        <div className="computer-monitor">
            <div className="screen">
                {spans.map((span, index) => (
                    <span key={index} className={index <= currentSpanIndex ? 'show' : 'hide'}>
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