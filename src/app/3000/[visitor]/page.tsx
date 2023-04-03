import Link from "next/link";
import Chat from "@/app/components/chat";
import Navbar from "@/app/components/nav";
import Waiting from "@/app/components/waiting";
import { queryParams } from "@/app/interfaces/params";
import Greeting from "@/app/components/greeting"

export default function Port3000 ({ params }: queryParams ) {
    return <>
    {/* <Waiting params={params} /> */}
    <Navbar/>
    {/* <Waiting params={params} /> */}
    <Greeting />
    <Chat params={params} />
    </>
}