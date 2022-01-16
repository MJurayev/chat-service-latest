import { Outlet } from 'react-router';
import Drawer from '../../common/Drawer/Drawer';
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatProvider from '../ChatProvider';
import DrawerProvider from '../DrawerProvider';
import './ChatLayout.css';
export default function ChatLayout() {
  return (
    <ChatProvider>
      <DrawerProvider>
        <div className="chat__area">
          <div className="chat__area__sidebar">
            <Sidebar />
          </div>
          <div className="chat__area__content">
            <Outlet />
          </div>
        </div>
        <Drawer></Drawer>
      </DrawerProvider>
    </ChatProvider>
  );
}
