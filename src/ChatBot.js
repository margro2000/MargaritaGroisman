import React, { useState } from 'react';
import './ChatBot.css'; // Import the CSS
import Headshot from './Headshot.png'; 

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-bot">
<button className="chat-bot-button">
  <img className="chat_img" src={Headshot} alt="Chat" />
  <div className="chat-text">
  Chat with Me
  </div>
  {isOpen ? '-' : '+'}
</button>
      {isOpen && (
        <div className="chat-bot-content">
          {/* Your chat bot content goes here */}
        </div>
      )}
    </div>
  );
}

export default ChatBot;