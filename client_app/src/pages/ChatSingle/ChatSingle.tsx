import React, { createRef, RefObject, useContext, useState } from 'react';
import { useParams } from 'react-router';
import MessageItem, { IMessageItem } from '../../components/MessageItem/MessageItem';
import WriteInput from '../../components/WriteInput/WriteInput';
import { MessagesAllContext } from '../../layouts/ChatProvider';
import './ChatSingle.css';
export default function ChatSingle() {
  const params = useParams();

  const messageRef:RefObject<HTMLDivElement> = useContext(MessagesAllContext)
  const [messageState, setMessageState] = useState<IMessageItem[]>([])
  const messages:IMessageItem[] =[
      {id:1, type:"received", text:"Salom"},
      {id:2, type:"sended", text:"Salom"},
      {id:3, type:"received", text:"Salom"},
      {id:4, type:"sended", text:"Salom"},
      {id:5, type:"sended", text:"Salom"},
      {id:6, type:"received", text:"Salom"},
      {id:7, type:"received", text:"Salom"},
      {id:8, type:"sended", text:"Salom"},
  ]
  const addMessage =(message:IMessageItem) => {
    setMessageState((messagesFake) => {
      return [...messagesFake, message]
    })
  }
  return (
    <div ref={messageRef} className="messages-container">

      <div id="messages_all" className="messages_area">
      {params.id}
        {
          messageState.map((message, key) => {
            return <MessageItem message={message}/>
          })
        }
      </div>
      <WriteInput addMessage={addMessage} chatAreaRef={messageRef} />
    </div>
  );
}
