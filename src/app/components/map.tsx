'use client'
import { useState } from "react"
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
    return <><div className="map-component">
        <LinkCard title='Projects' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis alias vel, ullam commodi culpa dolores nobis? Illo fuga enim adipisci nisi quia, error sed ex iusto, voluptatibus, dolore aliquam dolor et cupiditate dignissimos. Quisquam quasi rerum quidem nisi accusantium minus aliquid deserunt, minima unde similique dolores explicabo suscipit provident!'/>
        <LinkCard title='Life' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis alias vel, ullam commodi culpa dolores nobis? Illo fuga enim adipisci nisi quia, error sed ex iusto, voluptatibus, dolore aliquam dolor et cupiditate dignissimos. Quisquam quasi rerum quidem nisi accusantium minus aliquid deserunt, minima unde similique dolores explicabo suscipit provident!'/>
        <LinkCard title='Blog' body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis alias vel, ullam commodi culpa dolores nobis? Illo fuga enim adipisci nisi quia, error sed ex iusto, voluptatibus, dolore aliquam dolor et cupiditate dignissimos. Quisquam quasi rerum quidem nisi accusantium minus aliquid deserunt, minima unde similique dolores explicabo suscipit provident!'/>
        </div></>
}

interface LinkCardProps {
    title: string
    body: string
  }
  

function LinkCard(props: LinkCardProps) {
    const [showContent, setShowContent] = useState(true)
    return <>
    { showContent 
    ?<div className="link-card-component">
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