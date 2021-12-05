import React, { RefObject, createRef, KeyboardEvent, useRef, Ref } from 'react';
import { TextareaAutosize, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import './WriteInput.css';
import { IMessageItem } from '../MessageItem/MessageItem';
import { clearTimeout } from 'timers';
export default function WriteInput({
  addMessage,
}: {
  addMessage: Function;
  chatAreaRef: RefObject<HTMLDivElement>;
}) {
  // const sendMessage = ():void => {
  // const allMessages = document.getElementById("messages_all") as Element
  // const message = React.createElement(MessageItem, {type:"sended"})
  // console.log("Click");
  // ReactDOM.unmountComponentAtNode(allMessages)
  // ReactDOM.render(allMessages.appendChild(message), allMessages)
  // console.log(messagesRef.current);
  // }
  const textRef = useRef<HTMLTextAreaElement | null>(null!);
  const handleSubmit = () => {
    const text = trimString(textRef.current?.value)
    if(!text || text===""){
      setText();
    }
    const message: IMessageItem = {
      id: 12,
      text: text || '',
      type: 'sended',
    };
    
    setText();
    addMessage(message);
    let time = setTimeout(() => {
      const chatArea = document.getElementById('messages_all');
      const inputMessage = document.getElementById('inputMessage');
      chatArea?.scrollTo(0, chatArea?.scrollHeight + inputMessage?.scrollHeight!);
      return () => {
        clearTimeout(time);
      };
    }, 10);
  };
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (event.shiftKey) return;
      event.preventDefault()
      return handleSubmit();
    }
    return
  };

  const trimString = (text: string | undefined): string => {   
    if(!text)return "";
    console.log("Trimming:"+text);
    
    const newText = text?.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '');
    console.log(newText);

    return newText;
  };
  
  const setText = (text = '') => {
    console.log('Setting text');
    let textarea: HTMLTextAreaElement = document.getElementById(
      'inputMessageTextarea',
    ) as HTMLTextAreaElement;
    textarea['value'] = text;
  };
  
  return (
    <div id="inputMessage" className="input-container">
      <TextareaAutosize
        ref={textRef}
        id="inputMessageTextarea"
        onKeyPress={() => {
          console.log('Keypress');
        }}
        onKeyDown={handleKeyDown}
        className="input__textarea"
        aria-label="empty textarea"
        placeholder="Enter message..."
        maxRows="6"
      />
      <div className="input__rightIcons">
        <IconButton onClick={handleSubmit}>
          {/* On Click send message another user */}
          <TelegramIcon />
        </IconButton>
      </div>
    </div>
  );
}
