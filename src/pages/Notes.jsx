import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (text.trim() !== "") {
      setNotes([...notes, text]);
      setText("");
    }
  };

  return (
    <div className="p-4 h-screen bg-green-50">
      <h1 className="text-xl font-bold text-green-700 mb-4">📝 शेतकरी नोट्स</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="नोट लिहा..."
          className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addNote}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          जोडा
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {notes.map((note, idx) => (
          <div key={idx} className="p-3 bg-white rounded-xl shadow">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
