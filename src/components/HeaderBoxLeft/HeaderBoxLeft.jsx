import React from "react";
import "./HeaderBoxLeft.scss";
import photo from "../../assets/img/photo1.png";

const HeaderBoxLeft = ({ data }) => {
  const { name, position } = data;
  return (
    <div className="header__left">
      <div className="header__photo">
        <img
          className="header__photo-img"
          src={photo}
          alt="Artem Skomorokhov"
        />
      </div>
      <div className="header__base-info">
        <h4 className="title titl--h4">{name}</h4>
        <div className="status">{position}</div>
        <ul className="header__social">
          <li>
            <a href="https://www.facebook.com/">
              <i className="font-icon icon-facebook1"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/">
              <i className="font-icon icon-twitter1"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="font-icon icon-instagram1"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBoxLeft;
