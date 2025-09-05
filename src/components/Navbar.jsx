import React from "react";

function Navbar({ onMenuClick }) {
  return (
    <div className="bg-farmerGreen text-white shadow-md sticky top-0 z-50 flex items-center justify-between p-4">
      <button
        onClick={onMenuClick}
        className="text-white text-2xl font-bold hover:text-farmerYellow transition-colors duration-200"
      >
        ☰
      </button>
      <h1 className="text-lg md:text-2xl font-bold">कृषी तज्ज्ञ AI</h1>
      <div></div> {/* Placeholder for future icons */}
    </div>
  );
}

export default Navbar;
