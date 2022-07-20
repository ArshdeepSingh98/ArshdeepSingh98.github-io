import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import './App.css';

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(true);
  const handleViewSidebar = (value) => {
    console.log("sidebar value", value);
    setSideBarOpen(value);
  };

  return (
    <div className="App">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}></Sidebar>
      <MainContent isSidebarOpen={sidebarOpen} toggleSidebar={handleViewSidebar}></MainContent>      
    </div>
  );
}

export default App;
