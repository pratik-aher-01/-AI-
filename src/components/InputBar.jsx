import React, { useState } from "react";

function InputBar({ onSend }) {
  const [text, setText] = useState("");

  const handleSendClick = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="flex items-center p-4 gap-2 bg-white shadow-inner sticky bottom-0">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 rounded-xl p-2 border border-gray-300"
        placeholder="तुमचं प्रश्न लिहा..."
      />
      <button
        onClick={handleSendClick}
        className="bg-farmerGreen text-white p-2 rounded-xl hover:bg-farmerYellow transition-colors duration-200"
      >
        पाठवा
      </button>
    </div>
  );
}

export default InputBar;
