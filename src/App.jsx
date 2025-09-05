import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Market from "./pages/Market";
import Schemes from "./pages/Schemes";
import Diseases from "./pages/Diseases";
import Notes from "./pages/Notes";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen flex flex-col">
        {/* Navbar */}
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Sidebar */}
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather" element={<Page title="हवामान"/>} />
<Route path="/market" element={<Page title="बाजार भाव"/>} />
<Route path="/schemes" element={<Page title="सरकारी योजना"/>} />
<Route path="/diseases" element={<Page title="पिक आजार"/>} />
<Route path="/notes" element={<Page title="नोट्स"/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
