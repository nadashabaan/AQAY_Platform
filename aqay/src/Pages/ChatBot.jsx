import React, { useState } from "react";
import axios from "axios";
import { BsRobot } from "react-icons/bs";
import { RiUserSearchLine } from "react-icons/ri";
import "../CSS/ChatBot.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you today?", sender: "bot" },
  ]);
  const [user_input, setInput] = useState("");

  const handleSend = async () => {
    if (user_input.trim()) {
      setMessages((prev) => [...prev, { text: user_input, sender: "user" }]);

      try {
        const response = await axios.post(
          "https://aqay-assistant.onrender.com/AqayAssistant",
          {
            user_input,
          }
        );
        const botResponse = response.data.response;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: "bot" },
        ]);
      } catch (error) {
        alert(error);
        console.error("Failed to fetch response from the bot:", error);

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, there was an error connecting to the bot.",
            sender: "bot",
          },
        ]);
      }
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
            value={user_input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="send-button" onClick={handleSend}>
            ➤
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatBot;
