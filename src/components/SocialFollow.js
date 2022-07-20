import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const SocialFollow = () => {
  return (
    <div class="social-container">
      <a href="https://www.instagram.com/arshdeepsinghsachdeva/" target="_blank" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/asach"  target="_blank" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/ArshdeepSingh98"  target="_blank" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/asachw"  target="_blank" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      
    </div>
  );
};
export default SocialFollow;