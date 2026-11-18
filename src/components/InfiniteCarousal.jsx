
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faPeopleLine,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import { faGoogleScholar } from "@fortawesome/free-brands-svg-icons";

const InfiniteCarousal = () => {
  const data = [
    {
      icon: faMagnifyingGlass,
      title: "Social Research",
      content: "Generating evidence for better policies and practices.",
    },
    {
      icon: faPeopleLine,
      title: "Community Development",
      content: "Empowering communities for sustainable growth.",
    },
    {
      icon: faGoogleScholar,
      title: "Years of Service",
      content: "Building knowledge, creating awareness, opening opportunities.",
    },
    {
      icon: faBookOpen,
      title: "Books & Resources",
      content:
        "Sharing research, resources and learning for greater social impact.",
    },
  ];

  return (
    <div className="carousal-infinite">
      <div className="headline">
        <div className="line-horizontal"></div>
        <div>Our Focus Areas</div>
      </div>

      <div className="carousal-window-infinite">
        <div className="carousal-track-infinite">
          {[0, 5].map((group) => (
            <div className="carousal-group-infinite" key={group}>
              {data.map((item, index) => (
                <div className="box-exact" key={index}>
                  <div className="inner-box-infinite">
                    <div className="circle-box-infinite">
                      <FontAwesomeIcon
                        className="search-icon-infinite"
                        icon={item.icon}
                      />
                    </div>

                    <div className="title">{item.title}</div>

                    <p className="content">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousal;
