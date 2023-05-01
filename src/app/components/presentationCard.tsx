import Image from "next/image"
import logo from "../resources/iam.jpeg"
import Link from "next/link"
export default function PresentationCard () {
    return <>
    <div className="presentation-card">
        <div><Image width={300} height={300} style={{alignSelf: 'center', width: '100%', height: '100%'}} src={logo} alt='logo'/></div>
        <div>
            <h1 className="text-gradient">Charly Chacon</h1>
            <p>In the last few years I have been working in the area of software development and education. I really like mathematics, physics, and apart from doing applications I also like to make pizza and different dishes of my culinary interest. I am a lover of photography, art and traveling.</p>
            <p className="text-gradient">Check my social networks down below:</p>
            <div className="buttons-line"><Link className="button-gradient" href={'https://www.linkedin.com/in/charlytoc/'}>Linkedin</Link>
            <Link className="button-gradient" href={'https://github.com/Charlytoc'}>Github</Link></div>
        </div>
    </div>
    </>
}