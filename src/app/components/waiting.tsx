import Link from "next/link";
import {waiting} from "../helpers/waiting"
import { queryParams } from "../interfaces/params";


export default function Waiting ({params}: queryParams) {
    return <>
    <div id="waiting-greeting">
        <span>{waiting.greeting}<span className="var-2">{params.visitor}</span></span>
        <span>{waiting.currentlyWorking}</span>
        <span>{waiting.byTheWay}</span>
  
    </div>
    </>
}