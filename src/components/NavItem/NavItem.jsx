import React from "react";
import "./NavItem.scss";

const NavItem = ({ link, icon, name, id }) => {
  const fc = (e) => {
    e.preventDefault();
    return console.log(id);
  };
  return (
    <li className="nav__item">
      <a href={link} onClick={fc}>
        {icon}
        {name}
      </a>
    </li>
  );
};
export default NavItem;
