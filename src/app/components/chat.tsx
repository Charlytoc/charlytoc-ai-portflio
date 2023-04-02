'use client'
import { queryParams } from "../interfaces/params"
import { chatHelper } from "../helpers/chatHelper"
import { useState, useEffect } from "react"
export default function Chat ({params}: queryParams) {
    const [showChat, setShowChat] = useState(false)


    return <>
    {
        showChat && <div id="chat-container">
        <div className="chat-header">
            <div className="svg-container"><i className="fa-solid fa-brain"></i></div>
            <div className="chat-title"><p>Charlybot</p></div>
            <div className="button-container"><button onClick={()=> setShowChat(!showChat)}><i className="fa-regular fa-circle-xmark"></i></button></div>
        </div>
        <div className="chat-messages-container">
        <div className="bot-message-bubble"><i className="fa-solid fa-brain"></i><span className="bot-message"> Hi, <b className="var-2">{params.visitor}</b>! {chatHelper.welcome}</span></div>
        </div>
        <div className="chat-footer"></div>
    </div>
    }
    {
        !showChat && <div onClick={()=> setShowChat(!showChat)} id="talk-to-chat">
            <span>Talk to the AI </span><i className="fa-solid fa-brain"></i>
        </div>
    }
    </>
}