import Link from "next/link";
import {waiting} from "../helpers/waiting"
import { queryParams } from "../interfaces/params";


export default function Waiting ({params}: queryParams) {
    return <>
    <div id="waiting-greeting">
        <span>{waiting.greeting}<span className="var-2">{params.visitor}</span></span>
        <span>{waiting.currentlyWorking}</span>
        <span>{waiting.byTheWay}</span>
        {/* <Link className="button-outline-rose" href={`${waiting.lastPortfolio}`} >Last Portfolio</Link>
        <Link className="button-outline-magenta" href={`${waiting.linkedin}`} >Lindekin</Link>
        <Link className="button-outline-cerulean" href={`${waiting.github}`} >Github</Link>
        <Link className="button-outline-mint" href={`${waiting.cv}`} >Resume</Link> */}
  
    </div>
    </>
}