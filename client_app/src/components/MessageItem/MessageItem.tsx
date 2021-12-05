import React, { CSSProperties, MouseEventHandler } from 'react'
import { Avatar } from '@mui/material'
import "./MessageItem.css"
export interface IMessageItem{
    id:number,
    text:string,
    type:"sended" | "received"
}
export default function MessageItem({message}:{message:IMessageItem}) {
    // const type = "recieve" // send
    // const handleContextMenu = (e:MouseEvent<HTMLDivElement, MouseEventHandler>):void => {
    //     e.preventDefault();
    //     console.log('Context menu handling');
    //   }  
    const containerStyle:CSSProperties = {
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
