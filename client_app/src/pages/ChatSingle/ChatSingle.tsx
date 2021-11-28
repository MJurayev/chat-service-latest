import React, { createRef, RefObject, useContext } from 'react';
import { useParams } from 'react-router';
import MessageItem from '../../components/MessageItem/MessageItem';
import { MessagesAllContext } from '../../layouts/ChatProvider';
import './ChatSingle.css';
export default function ChatSingle() {
  const params = useParams();

  const messageRef:RefObject<HTMLDivElement> = useContext(MessagesAllContext)
  const Messages =[
    // {from:{sender_id:2, name:"Mansur Jo'rayev"}, message:{text:"Mansur Jo'rayev"}, to:{ reciever_i }
  ]

  return (
    <div ref={messageRef} id="messages_all" className="messages_area">
      {params.id}
      <MessageItem type="received" />
      <MessageItem type="sended" />
      <MessageItem type="received" />
      <MessageItem type="received" />
      <MessageItem type="sended" />

    </div>
  );
}
