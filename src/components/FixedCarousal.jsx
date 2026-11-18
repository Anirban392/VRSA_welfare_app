import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faPeopleLine,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    icon: faMagnifyingGlass,
    count: "50+",
    title: "Research & Publications",
    content: "Studies, papers and reports",
  },
  {
    icon: faPeopleLine,
    count: "25+",
    title: "Community Initiatives",
    content: "Grassroots impact programs",
  },
  {
    icon: faGoogleScholar,
    count: "10+",
    title: "Years of Service",
    content: "Building a better tomorrow",
  },
  {
    icon: faBookOpen,
    count: "15+",
    title: "Books & Resources",
    content: "Knowledge for change",
  }
];

function FixedCarousal() {
  return (
    <div className="carousal"
     style={{
    gridTemplateColumns: `repeat(${data.length}, 1fr)`,
  }}
    >
      {data.map((item, index) => (
        <div className="box" key={index}>
          <div className="outer-box">

            <div className="circle-box">
              <FontAwesomeIcon className="search-icon" icon={item.icon} />
            </div>
        <div className="inner-box">
            <div className="count">
              {item.count}
            </div>

            <div className="title">
              {item.title}
            </div>

            <p className="content">
              {item.content}
            </p>
        </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FixedCarousal;