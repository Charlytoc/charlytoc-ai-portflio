'use client'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from "react"
import { svgs } from "../helpers/svgs"
// export default function Map () {
//     return <>
//     <div className="map-container">
//     <div className="map">
//         <h1>Explore the map and discover a little</h1>
//         <div className="place mountain">
//                 {svgs.mountain}
//                 <div className="treasure">
//                 <a href="">Hobbies</a>
//                 {svgs.chest}
//             </div>
//         </div>
//         <div className="place castle">
//                 {svgs.castle}
//                 <div className="treasure">
//                 <a href="">Contact</a>
//                 {svgs.chest}
//             </div>
//         </div>
//         <div className="place compu">
//                 {svgs.computer}
//                 <div className="treasure">
//                 <a href="">Projects</a>
//                 {svgs.chest}
//             </div>
//         </div>
//     </div>
//     </div></>
// }



export default function Map() {

    

    useEffect(
        ()=>{
        const canva: HTMLCanvasElement | null = document.querySelector("#matrix");
        if (canva) {
            const ctx: any = canva.getContext('2d');
            canva.width = document.body.offsetWidth
            const w = canva.width;
            const h = canva.height;
    
            ctx.fillStyle = '#051B1E00';
            ctx.fillRect(0,0,w,h)
    
            const cols = Math.floor(w/20 + 1);
            const position_y = Array(cols).fill(0);
    
            function matrix() {
                
                ctx.fillStyle = '#051B1E09';
                ctx.fillRect(0,0,w,h);
        
                ctx.fillStyle = '#22BD9A';
                ctx.font = '15px monospace';
                position_y.forEach((y, ind)=>{
                    const text = String.fromCharCode(Math.random() * 120);
                    const x = ind * 20;
                    ctx.fillText(text, x, y);
                    // ctx.fillText(text, x+1, y);
                    if (y> 100 + Math.random()* 10000) {
                        position_y[ind] = 0;
                    }
                    else position_y[ind] = y+10;
                })
                
                
            }
            setInterval(matrix, 40)
        }
    }, [])

    return <><div className="map-component">
        <h1 className='text-gradient'>Welcome to my portfolio</h1>
        <div className='canva-container'>
            <canvas height={300} id="matrix"></canvas>
        </div>
        <LinkCard title='Projects' body={`In the last years I've been working on different projects related to different technologies like: Python, Typescript, AI, NextJs, Google Extensions.`}/>
        <LinkCard title='Learning' body={`Recently I've started creating educational content for my different social media platform, you can find me in Youtube, Linkedin and Twitter.`}/>
        <LinkCard title='Blog' body='In my blog you can read about different topics related to me.'/>
        </div></>
}

interface LinkCardProps {
    title: string
    body: string
  }
  

function LinkCard(props: LinkCardProps) {
    const [showContent, setShowContent] = useState(true)
    const router = useRouter()
    return <>
    { showContent 
    ?<div onClick={()=>router.push('3000/learning')} className="link-card-component">
        <h1>{props.title}</h1>
        <p>
            {props.body}
        </p>
    </div> 
    : <div>

    </div>
    }
    </>
}