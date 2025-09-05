import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar sliding in from left */}
      <motion.aside
        initial={{ x: -250 }}
        animate={{ x: open ? 0 : -250 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-50 p-4"
      >
        <h2 className="text-lg font-bold text-green-700 mb-4">मेनू</h2>

        <nav className="flex flex-col gap-3">
          <Link to="/weather" className="rounded-lg bg-green-100 p-2 hover:bg-green-200">🌝 हवामान</Link>
          <Link to="/market" className="rounded-lg bg-green-100 p-2 hover:bg-green-200">💰 बाजार भाव</Link>
          <Link to="/schemes" className="rounded-lg bg-green-100 p-2 hover:bg-green-200">🏛️ शासकीय योजना</Link>
          <Link to="/diseases" className="rounded-lg bg-green-100 p-2 hover:bg-green-200">🌾 पिकांचे रोग</Link>
          <Link to="/notes" className="rounded-lg bg-green-100 p-2 hover:bg-green-200">📝 शेतकरी नोट्स</Link>
        </nav>
      </motion.aside>
    </>
  );
}

export default Sidebar;
