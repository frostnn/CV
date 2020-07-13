import React from "react";
import "./HeaderBoxContainer.scss";
import HeaderBoxLeft from "../../components/HeaderBoxLeft/HeaderBoxLeft";
import HeaderBoxRight from "../../components/HeaderBoxRight/HeaderBoxRight";
import headerInfo from "../../data/headerInfo";

const HeaderBoxContainer = () => {
  return (
    <header className="header box">
      <HeaderBoxLeft data={headerInfo} />
      <HeaderBoxRight data={headerInfo} />
    </header>
  );
};

export default HeaderBoxContainer;
