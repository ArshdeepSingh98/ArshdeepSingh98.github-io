import React, { useState } from "react";
import HeaderNav from "./HeaderNav";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const MainContent = ({isSidebarOpen, toggleSidebar}) => {
  const [currentPage, setCurrentPage] = useState("about");
  const changeCurrentPage = (value) => {
    console.log("current page new value: ", value);
    setCurrentPage(value);
  };


  console.log("Current Page updated value: ", currentPage);

  return (
    <div className="main-container">
      <HeaderNav toggleSidebar={toggleSidebar} changeCurrentPage={changeCurrentPage}></HeaderNav>
      
      <AboutMe currentPage={currentPage}></AboutMe>
      <Projects currentPage={currentPage}></Projects>
      <ContactMe currentPage={currentPage}></ContactMe>
    </div>
  );
};

export default MainContent;