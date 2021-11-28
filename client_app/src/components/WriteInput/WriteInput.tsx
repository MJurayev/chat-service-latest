import React, { ReactElement, RefObject, useContext, useRef, useState } from 'react';
import { TextareaAutosize, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import "./WriteInput.css"
import MessageItem from '../MessageItem/MessageItem';
import { MessagesAllContext } from '../../layouts/ChatProvider';
import ReactDOM from 'react-dom';
export default function WriteInput() {
  const messagesRef:RefObject<HTMLDivElement> = useContext(MessagesAllContext)
  // const sendMessage = ():void => {
    // const allMessages = document.getElementById("messages_all") as Element
    // const message = React.createElement(MessageItem, {type:"sended"}) 
    // console.log("Click");
    // ReactDOM.unmountComponentAtNode(allMessages)
    // ReactDOM.render(allMessages.appendChild(message), allMessages)
    // console.log(messagesRef.current);
  // }
  return (
    <div className="input-container">
        <TextareaAutosize className="input__textarea" aria-label="empty textarea" placeholder="Empty" maxRows="6" />
        <div className="input__rightIcons">
            <IconButton > 
              {/* On Click send message another user */}
                <TelegramIcon />
            </IconButton>
        </div>
    </div>
  );
}
