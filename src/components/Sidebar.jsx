import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ open, onClose }) {
  const menuItems = [
    { name: "हवामान", path: "/weather", icon: "🌡️" },
    { name: "बाजार भाव", path: "/market", icon: "💰" },
    { name: "सरकारी योजना", path: "/schemes", icon: "📜" },
    { name: "पिक आजार", path: "/diseases", icon: "🦠" },
    { name: "नोट्स", path: "/notes", icon: "📝" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform ${
        open ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-40`}
    >
      <button
        onClick={onClose}
        className="m-4 text-xl font-bold hover:text-farmerGreen"
      >
        ✖
      </button>
      <div className="flex flex-col mt-4">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path}>
            <div className="flex items-center gap-2 p-3 m-2 rounded-xl hover:bg-green-100 cursor-pointer">
              <span>{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
