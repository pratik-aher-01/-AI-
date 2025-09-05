import React from "react";
import { Menu } from "lucide-react"; // icon for ☰ menu

function Navbar({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between bg-green-700 text-white px-4 py-3 shadow-md">
      {/* Left: Menu Button */}
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-green-600 transition"
      >
        <Menu size={24} />
      </button>

      {/* Center: Title */}
      <h1 className="text-lg sm:text-xl font-bold tracking-wide">
        कृषी तज्ज्ञ AI 🌾
      </h1>

      {/* Right: placeholder (later for login/profile) */}
      <div className="w-6"></div>
    </header>
  );
}

export default Navbar;
