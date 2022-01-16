import  { useRef } from 'react';
import { TextareaAutosize, IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import './WriteInput.css';
import { clearTimeout } from 'timers';
export default function WriteInput({ addMessage }) {
  const textRef = useRef();
  const handleSubmit = () => {
    const text = trimString(textRef.current?.value);
    if (!text || text === '') {
      setText();
    }
    const message = {
      id: 12,
      text: text || '',
      type: 'sended',
    };

    setText();
    addMessage(message);
    let time = setTimeout(() => {
      const chatArea = document.getElementById('messages_all');
      const inputMessage = document.getElementById('inputMessage');
      chatArea?.scrollTo(0, chatArea?.scrollHeight + inputMessage?.scrollHeight);
      return () => {
        clearTimeout(time);
      };
    }, 10);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (event.shiftKey) return;
      event.preventDefault();
      return handleSubmit();
    }
    return;
  };

  const trimString = (text) => {
    if (!text) return '';
    console.log('Trimming:' + text);

    const newText = text?.replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '');
    console.log(newText);

    return newText;
  };

  const setText = (text = '') => {
    console.log('Setting text');
    let textarea = document.getElementById('inputMessageTextarea');
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
