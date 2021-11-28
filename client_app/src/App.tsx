import { Button } from '@mui/material';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import NotFound from './pages/NotFound/NotFound';
import ChatSingle from './pages/ChatSingle/ChatSingle';
import ChatLayout from './layouts/ChatLayout/ChatLayout';
import "./App.css";
function App() {
  return (
    <div className="App app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="chat" element ={<ChatLayout />}>
              <Route index element = {<Chat /> } />
              <Route path=":id" element = {<ChatSingle />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
