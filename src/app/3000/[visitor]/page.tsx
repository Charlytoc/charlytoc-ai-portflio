import Link from "next/link";

interface queryParams {
    visitor: string;
}

const homePage = {
    greeting: 'Hello, ',
    currentlyWorking: `currently I'm working in this page, it will be available soon!`,
    byTheWay: `while I'm working you can check the links below`,
    linkedin: `https://www.linkedin.com/in/charlytoc/`,
    github: `https://github.com/Charlytoc`,
    lastPortfolio: `https://charlytoc-portfolio.vercel.app/`,
    cv: `https://www.canva.com/design/DAFYIqfqXP0/FwCvRlI4Y3V3kP-cTkEaMA/view?utm_content=DAFYIqfqXP0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`


}

export default function Port3000 ({params}: { params: queryParams }) {
    return <>
    <div id="waiting-greeting">
        <span>{homePage.greeting}<span className="var-2">{params.visitor}</span></span>
        <span>{homePage.currentlyWorking}</span>
        <span>{homePage.byTheWay}</span>
        <Link className="button-outline-rose" href={`${homePage.lastPortfolio}`} >Last Portfolio</Link>
        <Link className="button-outline-magenta" href={`${homePage.linkedin}`} >Lindekin</Link>
        <Link className="button-outline-cerulean" href={`${homePage.github}`} >Github</Link>
        <Link className="button-outline-mint" href={`${homePage.cv}`} >Resume</Link>
  
    </div>
    </>
}