import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatBubble from "../components/ChatBubble";
import InputBar from "../components/InputBar";

function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "🙏 नमस्कार शेतकरी! मी तुमची मदत करायला तयार आहे." }
  ]);

  // Handle user send
  const handleSend = (msg) => {
    const userMsg = { sender: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);

    // Fake bot reply (for now)
    setTimeout(() => {
      const botMsg = { sender: "bot", text: `तुम्ही म्हणालात: "${msg}"` };
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  // Text-to-speech for bot reply
  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "mr-IN"; // Marathi voice
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 bg-green-50">
        {messages.map((msg, idx) => (
          <ChatBubble
            key={idx}
            sender={msg.sender}
            text={msg.text}
            onSpeak={() => speakText(msg.text)}
          />
        ))}
      </div>

      {/* Input bar */}
      <InputBar onSend={handleSend} />
    </div>
  );
}

export default Home;
