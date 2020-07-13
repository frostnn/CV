import React from "react";
import "./HeaderBoxLeft.scss";
import photo from "../../assets/img/photo1.png";
import { FiFacebook } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSkype } from "react-icons/ai";
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
            <a href="https://www.facebook.com/profile.php?id=100003600116322">
              <FiFacebook style={{ height: "1.5em", width: "1.5em" }} />
            </a>
          </li>
          <li>
            <a href="https://tlgg.ru/@frostnn">
              <FaTelegramPlane style={{ height: "1.5em", width: "1.5em" }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <AiOutlineSkype style={{ height: "1.5em", width: "1.5em" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderBoxLeft;
