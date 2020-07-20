import React from "react";
import NavItem from "../NavItem/NavItem";
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
const link = [
  {
    id: 1,
    name: "About",
    link: "About.html",
    icon: <FiUser style={styleIcons} />,
  },
  {
    id: 2,
    name: "Resume",
    link: "Resume.html",
    icon: <FiFileText style={styleIcons} />,
  },
  {
    id: 3,
    name: "works",
    link: "works.html",
    icon: <FiCodesandbox style={styleIcons} />,
  },
  {
    id: 4,
    name: "blog",
    link: "blog.html",
    icon: <FiBookOpen style={styleIcons} />,
  },
  {
    id: 5,
    name: "contact",
    link: "contact.html",
    icon: <FiBook style={styleIcons} />,
  },
];

const AsideNav = () => {
  return (
    <div className="sidebar box sticky-column">
      <ul className="nav">
        {link.map((link, id) => {
          return (
            <NavItem
              link={link.link}
              name={link.name}
              icon={link.icon}
              key={link.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default AsideNav;
