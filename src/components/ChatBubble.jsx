import React from "react";

function ChatBubble({ sender, text }) {
  const isAI = sender === "ai";
  return (
    <div
      className={`max-w-xs p-3 my-2 rounded-xl shadow-md ${
        isAI ? "bg-farmerGreen text-white self-start" : "bg-farmerYellow text-black self-end"
      }`}
    >
      {text}
    </div>
  );
}

export default ChatBubble;
