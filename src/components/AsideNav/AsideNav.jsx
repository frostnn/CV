import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { navItem } from "../../data/asideInfo";
import "./AsideNav.scss";

const AsideNav = () => {
  const [activeButton, setActiveButton] = useState(1);
  const pickId = (id) => {
    setActiveButton(activeButton(id));
  };
  return (
    <div className="sidebar box sticky-column">
      <ul className="nav">
        {navItem.map((navItem) => {
          const { id, ...itemProps } = navItem;
          return (
            <NavItem
              {...itemProps}
              key={id}
              active={activeButton === id}
              cd={() => pickId(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default AsideNav;
