import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faPeopleLine,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className="about-exact">
        <div className="about-inner">
           <div className="image-container"></div>
           <div className="about-ext-inner">
            <div class="line-horizontal-1"></div>
            <h1 className="title">About VRSA</h1>
            <p className="content">
                Voice for Research in Social Administration (VRSA) is a registered <br></br>NGO committed to promoting research, strengthening social<br></br> administration, advancing education and creating meaningful<br></br> community impact. We believe in knowledge, collaboration and<br></br> inclusive development for a more just and equitable society.
            </p>
            
            <button className="banner-button">Learn More →</button>
           </div>
           
        </div>
        <div className="about-after">
            <div className="about-spaced">
            <div className="about-left">
            <h2 className="desc">Support Research. Support Communities.</h2>
            <p className="desc-2">Your support helps us conduct research, empower communities,<br></br>
            and build a better tomorrow</p>
            </div><div>
        <button className="donate-about">Donate Now →</button>
         <FontAwesomeIcon className="search-icon-1" icon={faPeopleLine} />
           </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default About
