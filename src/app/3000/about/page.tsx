import Navbar from "@/app/components/nav"
import Cube from "@/app/components/cube"
import CursorWrapper from "@/app/components/cursorWrapper"
import PresentationCard from "@/app/components/presentationCard"
export default function AboutPage () {

    return <>
    <CursorWrapper>
    <Navbar />
    <PresentationCard />
    <Education />
    </CursorWrapper>
    </>
}


const Education = () => {
    return <>
    <div className="education-component">
        <h1 className="text-gradient">Education</h1>
        </div></>
}