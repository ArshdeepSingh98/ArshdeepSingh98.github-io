import React from "react";

const AboutMe = ({currentPage}) => {
  console.log("Now showing page: ", currentPage);
  if (currentPage == "about") {
    return (
      <div className="section-container">
        <h1>About Me</h1>
        <div className="about-container"> 
          <div className="about-description">
            <p>I am Arshdeep. I am interested in Machine Learning and Natural Langauge Processing.</p>
            <br></br>
            <p>I have industrial experience in the field of Web development and Software development. I have worked in various programming languages and frameworks such as C++, Javascript, Java, Go, ReactJS, Next.js, Springboot etc.</p>
            <br></br>
            <p>In my free time I try to learn something, contribute to open source, read books and play video games.</p>
          </div>
          <img className="profile-image" src="/Profile.png" alt="Profile Image"/>
        </div>
        
      </div>
    )
  } else {
    return null;
  }
};

export default AboutMe;