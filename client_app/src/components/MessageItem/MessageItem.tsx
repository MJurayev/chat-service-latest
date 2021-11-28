import React, { CSSProperties, MouseEventHandler } from 'react'
import { Avatar } from '@mui/material'
import "./MessageItem.css"
export default function MessageItem({type}:{type:"sended" | "received"}) {
    // const type = "recieve" // send
    // const handleContextMenu = (e:MouseEvent<HTMLDivElement, MouseEventHandler>):void => {
    //     e.preventDefault();
    //     console.log('Context menu handling');
    //   }
    const containerStyle:CSSProperties = {
        flexDirection:type === "sended" ? "row-reverse" :"row"
    }
    const handleClick =() => {
        console.log("Message Click bo'ldi")
    }
    return (
        <div onClick={handleClick} style={containerStyle} className="message-container">
            <Avatar className="message__avatar" alt={`Jo'rayev Mansur`}></Avatar>
            <div className={`messageBox messageBox__${type}`}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti, temporibus repellendus voluptas quae labore veniam repudiandae a quaerat dolorem! Officia fugiat veritatis maiores dolores quidem delectus velit labore quo.
            </div>
        </div>
    )
}
