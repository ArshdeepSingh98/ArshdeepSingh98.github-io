import React from "react";

const Projects = ({currentPage}) => {
  console.log("Now showing page: ", currentPage);
  if (currentPage == "projects") {
    return (
      <div className="section-container">
        <h1>Projects</h1>
        <a className="project-container" href="https://github.com/ArshdeepSingh98/TwitterVOne" target="_blank">
          <h2 className="project-heading p-twitter">Twitter Clone</h2>
          <div className="project-description">
            <p>A clone of Twitter developed in Android using Twitter APIs </p>
            <p>Create and Login Twitter account</p>
            <p>Post tweet with or without image</p>
            <p>Profile timelines, search, favorites and many more</p>
          </div>
        </a>

        <a className="project-container" href="https://github.com/ArshdeepSingh98/Weather-App" target="_blank">
          <h2 className="project-heading p-weather">Weather App</h2>
          <div className="project-description">
            <p>A web application made in ReactJS using Open Weather Map API</p>
            <p>User enters the location, then it get maps the response forecast with day and time for user to select</p>
            <p>Background image also reflects the weather of the region using unsplash image API</p>
          </div>
        </a>
        <a className="project-container" href="https://github.com/ArshdeepSingh98/Phone-Directory" target="_blank">
          <h2 className="project-heading p-phone">Phone Directory</h2>
          <div className="project-description">
            <p>Phone directory made in C++ using data structures and OOPS concepts.</p>
            <p>User can search for phone number by partially entering the number or name of the contact.</p>
          </div>
        </a>

      </div>
    )
  } else {
    return null;
  }
};

export default Projects;