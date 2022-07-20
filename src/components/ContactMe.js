import React from "react";

const ContactMe = ({currentPage}) => {
  console.log("Now showing page: ", currentPage);
  if (currentPage == "contact") {
    return (
      <div className="section-container">
        <h1>Contact Me</h1>
        <p>
          Feel free to contact me at &nbsp; <a href="mailto:asachd14@adu.edu">asachd14@adu.edu</a>, &nbsp; <a href="tel:425-900-2413">+1-425-900-2413</a> 
        </p>
      </div>
    )
  } else {
    return null;
  }
};

export default ContactMe;