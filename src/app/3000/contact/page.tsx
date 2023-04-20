'use client'
import Navbar from "@/app/components/nav"
import { contactPage } from "@/app/helpers/contactHelper"
import Link from "next/link"
import { waiting } from "@/app/helpers/waiting"
import emailjs from '@emailjs/browser';
import { useState } from "react"

const initValues = {name: "", message: "", email: ""}


export default function Contact () {
    const [formData, setFormData] = useState(initValues)
    const [showNotification, setShowNotification] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState("")
    const handleMouseMove = (e:any) => {
        const cursor:any = document.querySelector('.cursor');
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }

    const sendEmail = () => {
        emailjs.send("Charlytoc","template_x8hpo24",{
            name: formData.name,
            message: formData.message,
            email: formData.email,
            }, 'htbfOOPZRcoGtSQcb')
            .then(res =>
                {setNotificationMessage(`You've send me an email, I'll reply you soon!`);
                setShowNotification(true);
            setFormData(initValues)})
            setTimeout(()=>{
                setShowNotification(false)
            }, 5000);
    }

    const handleChange = ({target}: any) => setFormData((prev)=>({
        ...prev,
        [target.name]: target.value
    }))

    return <>
        <div id="contact-page" onMouseMove={handleMouseMove}>
        <Navbar />
        <div className="cursor"></div>
        {showNotification && <Notification message={`You're email was sent succesfully`} />}
        <h2>{contactPage.networks}</h2>
        {waiting.linkedin}
        {waiting.github}
        {waiting.portofolio}
        {waiting.whatsapp}
        <h2>{contactPage.message}</h2>
        <section>
            <label >Your name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <label >Your email</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange}/>
            <label >Message</label>
            <textarea  name="message" value={formData.message} onChange={handleChange} />
        </section>
            <button onClick={sendEmail}>Send email</button>

        </div>
        </>
}
interface message {
    message: string
}

function Notification ({message}: message) {
    return <>
    <div className="notification">{message}</div>
    </>
}