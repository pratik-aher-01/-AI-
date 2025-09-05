// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Market from "./pages/Market";
import Schemes from "./pages/Schemes";
import Diseases from "./pages/Diseases";
import Notes from "./pages/Notes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto p-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/market" element={<Market />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
