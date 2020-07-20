import React from "react";
import "./NavItem.scss";

const NavItem = (props) => {
  return (
    <li className="nav__item">
      <a href={props.link}>
        {props.icon}
        {props.name}
      </a>
    </li>
  );
};
export default NavItem;
