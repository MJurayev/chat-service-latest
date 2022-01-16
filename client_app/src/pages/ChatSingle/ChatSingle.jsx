import  {useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MessageItem from '../../components/MessageItem/MessageItem';
import Navbar from '../../components/Navbar/Navbar';
import WriteInput from '../../components/WriteInput/WriteInput';
import { MessagesAllContext } from '../../layouts/ChatProvider';
import './ChatSingle.css';
export default function ChatSingle() {
  const params = useParams();

  const messageRef = useContext(MessagesAllContext);
  const [messageState, setMessageState] = useState([]);
  const messages = [
    { id: 1, type: 'received', text: 'Salom' },
    { id: 2, type: 'sended', text: 'Salom' },
    { id: 3, type: 'received', text: 'Salom' },
    { id: 4, type: 'sended', text: 'Salom' },
    { id: 5, type: 'sended', text: 'Salom' },
    { id: 6, type: 'received', text: 'Salom' },
    { id: 7, type: 'received', text: 'Salom' },
    { id: 8, type: 'sended', text: 'Salom' },
    { id: 9, type: 'received', text: 'Salom' },
    { id: 10, type: 'sended', text: 'Salom' },
    { id: 13, type: 'received', text: 'Salom' },
    { id: 14, type: 'sended', text: 'Salom' },
    { id: 15, type: 'sended', text: 'Salom' },
    { id: 16, type: 'received', text: 'Salom' },
    { id: 17, type: 'received', text: 'Salom' },
    { id: 18, type: 'sended', text: 'Salom' },
  ];
  useEffect(() => {
    setMessageState(messages);
  }, []);
  const addMessage = (message) => {
    setMessageState((messagesFake) => {
      return [...messagesFake, message];
    });
  };
  return (
    <div ref={messageRef} className="messages-container">
      <div className="message__author">
        <Navbar />
      </div>
      <div id="messages_all" className="messages_area">
        {params.id}
        {messageState.map((message, key) => {
          return <MessageItem key={key} message={message} />;
        })}
      </div>
      <WriteInput addMessage={addMessage} chatAreaRef={messageRef} />
    </div>
  );
}
