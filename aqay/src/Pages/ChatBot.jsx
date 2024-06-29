<<<<<<< Updated upstream
import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";
=======
import React, { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import "../CSS/ChatBot.css";
import Navbar from "../component/Navbar";

>>>>>>> Stashed changes
const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello , How can I help you today Amira!", sender: "bot" },
    {
      text: "I want to buy a gift for my nephew he is a newborn",
      sender: "user",
    },
    { text: "You can buy a handmade toy from COCO", sender: "bot" },
    { text: "Ok, but it's safe ?", sender: "user" },
    {
      text: "Make sure it is made of cotton and it extremely easy to clean",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="chat-container">
        <div className="chat-header">
          <h1>
            <BsRobot className="chat-icon" /> AQAY Chat Bot
          </h1>
        </div>
        <div className="chat-body">
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.sender}`}>
              <div className={`message-bubble ${message.sender}`}>
                {message.sender === "bot" ? (
                  <BsRobot className="message-icon bot" />
                ) : (
                  <RiUserSearchLine className="message-icon user" />
                )}
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-container">
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message for AQAY chatbot here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>
            ➤
          </button>
        </div>
      </div>
>>>>>>> Stashed changes
    </>
  );
};

export default ChatBot;
