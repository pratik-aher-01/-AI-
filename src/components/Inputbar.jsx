import React, { useState } from "react";
import { Mic, Image, Send } from "lucide-react";

function InputBar({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center gap-2 p-3 border-t bg-white fixed bottom-0 left-0 w-full">
      {/* Mic button (future voice input) */}
      <button className="p-2 rounded-full hover:bg-green-100">
        <Mic size={20} className="text-green-700" />
      </button>

      {/* Photo button (future crop photo input) */}
      <button className="p-2 rounded-full hover:bg-green-100">
        <Image size={20} className="text-green-700" />
      </button>

      {/* Text input */}
      <input
        type="text"
        placeholder="नमस्कार शेतकरी !"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Send button */}
      <button
        onClick={handleSend}
        className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition"
      >
        <Send size={20} />
      </button>
    </div>
  );
}

export default InputBar;
