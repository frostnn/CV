import React, { useState } from "react";
import "./NavItem.scss";
import style from "./active.scss";
import { navItem } from "../../data/asideInfo";
import concat from "../../units/concat";
const NavItem = ({ link, icon, name, id, cb, active }) => {
  return (
    <li className="nav__item">
      <a href={link} onClick={cb} className={concat(active && style.active)}>
        {icon}
        {name}
      </a>
    </li>
  );
};
export default NavItem;
