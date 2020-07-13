import React from "react";
import "./HeaderBoxRight.scss";

const HeaderBoxRight = ({ data }) => {
  const { email, location, phone, birthday } = data;
  return (
    <div className="header__right">
      <ul className="header__contact">
        <li>
          <span className="overhead">Email</span>
          {email}
        </li>
        <li>
          <span className="overhead">Phone</span>
          {phone}
        </li>
      </ul>
      <ul className="header__contact">
        <li>
          <span className="overhead">Birthday</span>
          {birthday}
        </li>
        <li>
          <span className="overhead">Location</span>
          {location}
        </li>
      </ul>
    </div>
  );
};

export default HeaderBoxRight;
