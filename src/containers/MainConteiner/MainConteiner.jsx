import React from "react";
import "./MainConteiner.scss";

const MainConteiner = (props) => {
  const { children } = props;
  return <div className="row sticky-parent">{children}</div>;
};
export default MainConteiner;
