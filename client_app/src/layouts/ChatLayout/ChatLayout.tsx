import React, { createContext, useRef } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import WriteInput from '../../components/WriteInput/WriteInput';
import ChatProvider from '../ChatProvider';
import './ChatLayout.css';
export default function ChatLayout() {
  return (
    <ChatProvider>
      <div className="chat__area">
        <div className="chat__area__sidebar">
         
          <Sidebar />
        </div>
        <div className="chat__area__content">
          <Outlet />
        </div>
      </div>
    </ChatProvider>
  );
}
