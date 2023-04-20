import Link from "next/link"
export const waiting = {
    greeting: 'Hello, ',
    currentlyWorking: `Currently I'm working in this page, it will be available soon!`,
    byTheWay: `while I'm working you can talk to my AI in the right bottom corner!`,
    linkedin: <Link className="button-outline-mint" href={`https://www.linkedin.com/in/charlytoc/`} >Linkedin</Link>,
    github: <Link className="button-outline-mint" href={`https://github.com/Charlytoc`} >Github</Link>,
    portofolio: <Link className="button-outline-mint" href={`https://charlytoc-portfolio.vercel.app/`} >Last portfolio</Link>,
    cv: <Link className="button-outline-mint" href={`https://www.canva.com/design/DAFYIqfqXP0/FwCvRlI4Y3V3kP-cTkEaMA/view?utm_content=DAFYIqfqXP0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink`} >Resume</Link>,
    whatsapp: <Link className="button-outline-mint" href={`https://api.whatsapp.com/send/?phone=593964105554&text=Hello,%20Charly!`} >WhatsApp</Link>,
}