'use client'
import { queryParams } from "../interfaces/params"
import { chatHelper } from "../helpers/chatHelper"
import { useState, useEffect } from "react"
import axios from "axios"
export default function Chat ({params}: queryParams) {
    const [showChat, setShowChat] = useState(false)
    const [question, setQuestion] = useState("")
    const [lastBotMessage, setLastBotMessage] = useState(`Hello, ${params.visitor}, ${chatHelper.welcome}`)
    const [lastQuestion, setLastQuestion] = useState(`Hi Charly! I'm ${params.visitor}, I want to make questions for you`)
    const [bufferQuestion, setBufferQuestion] = useState("")
    const [chatMessages, setChatMessages] = useState([
        {
            type: 'bot',
            message:  `Hi, ${params.visitor}! ${chatHelper.welcome}`,
            divClass: `bot-message-bubble`,
            spanClass: `bot-message text-gradient`,
            iconClass: `fa-solid fa-brain text-gradient`
        },
  
    ])

    function makeMessage (messageType: string, message: string) {
        if (messageType == 'bot') {
            return {
                type: 'bot',
                message: message,
                divClass: `bot-message-bubble`,
                spanClass: `bot-message text-gradient`,
                iconClass: `fa-solid fa-brain text-gradient`
            }
        }
        else {
            return {
                type: 'visitor',
                message: message,
                divClass: `visitor-message-bubble`,
                spanClass: `visitor-message`,
                iconClass: `fa-solid fa-user`
            }
        }
     }


    const data = {
        extension: true,
        token: '407f2194babf39d6d3e7870043717d37c35e0919',
        inputs: {
            previous_user_message: lastQuestion,
            last_bot_message: lastBotMessage,
            question: question
        },
      };


    const sendData = ():void => {

        let updatedMessagesThreat = [...chatMessages, makeMessage('visitor', question)]
        setChatMessages(updatedMessagesThreat)

        setQuestion('')
        axios.post('https://rigobot.herokuapp.com/v1/prompting/complete/?template_id=11', data)
        .then((response) => {
            updatedMessagesThreat = [...updatedMessagesThreat,  makeMessage('bot', response.data.answer)]

            setLastBotMessage(response.data.answer)
            setLastQuestion(bufferQuestion)
            setChatMessages(updatedMessagesThreat)
            
        })
        .catch((error) => {
            console.error(error);
        });

  
        
    }
    const handleKeyUp = (e: any) => {
        if (e.keyCode === 13) {
            sendData()
          }
    }
    return <>
    {
        showChat && <div id="chat-container">
        <div className="chat-header">
            <div className="svg-container"><i className="fa-solid fa-brain text-gradient"></i></div>
            <div className="chat-title text-gradient"><p>Charlybot</p></div>
            <div className="button-container"><button onClick={()=> setShowChat(!showChat)}><i className="fa-regular fa-circle-xmark text-gradient"></i></button></div>
        </div>
        <div className="chat-messages-container">
        {chatMessages.map((item, index) => 
        <div key={index} className={item.divClass}>
            { item.type == 'bot' ? 
            <><i className={item.iconClass}></i><span className={item.spanClass}>{item.message}</span></> 
            : <><span className={item.spanClass}>{item.message}</span><i className={item.iconClass}></i></>
            }
        </div>)}
        </div>
        <div className="chat-footer">
            <input onKeyUp={(e)=> handleKeyUp(e)} value={question} className="input-question" type="text" onChange={(e)=> {setQuestion(e.target.value), setBufferQuestion(e.target.value)}} />
            <button onClick={sendData}><i className="fa-solid fa-paper-plane"></i></button>
        </div>
    </div>
    }
    {
        !showChat && <div onClick={()=> setShowChat(!showChat)} id="talk-to-chat">
            <span>Talk to the AI </span><i className="fa-solid fa-brain"></i>
        </div>
    }
    </>
}