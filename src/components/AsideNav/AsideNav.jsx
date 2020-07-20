import React from "react";
import NavItem from "../NavItem/NavItem";
import { navItem } from "../../data/asideInfo";
import "./AsideNav.scss";

const AsideNav = () => {
  return (
    <div className="sidebar box sticky-column">
      <ul className="nav">
        {navItem.map((navItem) => {
          const { id, ...itemProps } = navItem;
          return <NavItem {...itemProps} key={id} />;
        })}
      </ul>
    </div>
  );
};
export default AsideNav;
