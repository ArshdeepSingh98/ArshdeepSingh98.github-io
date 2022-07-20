import React from "react";
import logo from '../assets/images/002logo-transparent.png';

const HeaderNav = ({toggleSidebar, changeCurrentPage}) => {
  const handleAboutClick = (e) => {
    toggleSidebar(true);
    changeCurrentPage("about");

    e.preventDefault();
    e.target.parentElement.querySelectorAll( ".active" ).forEach( e => e.classList.remove("active") );
    e.target.classList.add("active");
  };

  const handleProjectsClick = (e) => {
    toggleSidebar(false);
    changeCurrentPage("projects");

    e.preventDefault();
    e.target.parentElement.querySelectorAll( ".active" ).forEach( e => e.classList.remove("active") );
    e.target.classList.add("active");
  };

  const handleContactClick = (e) => {
    toggleSidebar(false);
    changeCurrentPage("contact");

    e.preventDefault();
    e.target.parentElement.querySelectorAll( ".active" ).forEach( e => e.classList.remove("active") );
    e.target.classList.add("active");
  };

  return (
    <div className="header-container">
      <img src={logo} className="header__logo" alt="logo" />
      <ul className="header-items">
        <li className="header__item active" onClick={handleAboutClick}>About</li>
        <li className="header__item" onClick={handleProjectsClick}>Projects</li>
        <li className="header__item" onClick={handleContactClick}>Contact</li>
      </ul>
    </div>
  );
};

export default HeaderNav;