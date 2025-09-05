import React from "react";

function ChatBubble({ sender, text, onSpeak }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-2`}
    >
      <div
        className={`p-3 rounded-2xl max-w-[70%] ${
          isUser
            ? "bg-green-600 text-white rounded-br-none"
            : "bg-white border border-green-300 text-black rounded-bl-none"
        }`}
      >
        <p>{text}</p>
        {!isUser && (
          <button
            onClick={onSpeak}
            className="text-sm text-green-700 mt-1 underline"
          >
            🔊 ऐका
          </button>
        )}
      </div>
    </div>
  );
}

export default ChatBubble;
