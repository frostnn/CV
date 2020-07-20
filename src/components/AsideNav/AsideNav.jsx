import React from "react";
import {
  FiUser,
  FiCodesandbox,
  FiFileText,
  FiBookOpen,
  FiBook,
} from "react-icons/fi";
import "./AsideNav.scss";

const styleIcons = {
  height: "3em",
  width: "3em",
  marginBottom: "0.5rem",
  marginTop: "0.25rem",
};

const AsideNav = () => {
  return (
    <div className="sidebar box sticky-column">
      <ul className="nav">
        <li className="nav__item">
          <a className="active" href="about.html">
            <FiUser style={styleIcons} />
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="resume.html">
            <FiFileText style={styleIcons} />
            Resume
          </a>
        </li>
        <li className="nav__item">
          <a href="works.html">
            <FiCodesandbox style={styleIcons} />
            Works
          </a>
        </li>
        <li className="nav__item">
          <a href="blog.html">
            <FiBookOpen style={styleIcons} />
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="contact.html">
            <FiBook style={styleIcons} />
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AsideNav;
