import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [messageCount, setMessageCount] = useState(0);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      const randomUser = user_list[Math.floor(Math.random() * user_list.length)];
      const newMessage = {
        user: randomUser,
        text: inputMessage,
        likes: 0
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setMessageCount(messageCount + 1);
    }
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes++;
    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <div className="message-container">
          <p className="message-count">Total messages: {messageCount}</p>
          {messages.map((message, index) => (
            <div key={index} className="message">
              <div className="message-content">
                <span className="username">{message.user}</span>
                <p>{message.text}</p>
              </div>
              <div className="like-container">
                <button onClick={() => handleLike(index)} className="like-button">Like</button>
                <span className="like-count">{message.likes}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="input-box"
          />
          <button onClick={sendMessage} className="send-button">Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
