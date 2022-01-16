import React from 'react'
import { Avatar } from '@mui/material'
import "./MessageItem.css"

export default function MessageItem({message}) {
    const containerStyle = {
        flexDirection:message.type === "sended" ? "row-reverse" :"row"
    }
    const handleClick =() => {
        console.log("Message Click bo'ldi")
    }
    return (
        <div onClick={handleClick} style={containerStyle} className="message-container">
            <Avatar className="message__avatar" alt={`Jo'rayev Mansur`}></Avatar>
            <pre className={`messageBox messageBox__${message.type}`}>
               {message.text}
            </pre>
        </div>
    )
}
