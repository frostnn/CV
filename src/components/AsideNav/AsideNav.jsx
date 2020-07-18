import React from "react";
import "./AsideNav.scss";

const AsideNav = () => {
  return (
    <div className="sidebar box sticky-column">
      <ul className="nav">
        <li className="nav__item">
          <a className="active" href="about.html">
            <i className="icon-user"></i>About
          </a>
        </li>
        <li className="nav__item">
          <a href="resume.html">
            <i className="icon-file-text"></i>Resume
          </a>
        </li>
        <li className="nav__item">
          <a href="works.html">
            <i className="icon-codesandbox"></i>Works
          </a>
        </li>
        <li className="nav__item">
          <a href="blog.html">
            <i className="icon-book-open"></i>Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="contact.html">
            <i className="icon-book"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AsideNav;
