import React from "react";
import logo from '../assets/images/Arshdeep.png';
import SocialFollow from "./SocialFollow";
import Resume from "../assets/files/resume.pdf";

const Sidebar = ({isOpen, toggleSidebar}) => {
  const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
      <img src={logo} className="sidebar__logo" alt="logo" />
      
      <h1 className="text">
        Hi! <br></br> I'm Arshdeep Singh Sachdeva 
      </h1>

      <div className="button resume"><a href={Resume} target="_blank">Resume</a></div>
      
      <SocialFollow></SocialFollow>
    </div>
  );
};
export default Sidebar;